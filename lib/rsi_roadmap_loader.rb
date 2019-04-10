# frozen_string_literal: true

require 'rsi_base_loader'

class RsiRoadmapLoader < RsiBaseLoader
  def fetch
    response = Typhoeus.get("#{base_url}/api/roadmap/v1/boards/1")
    return false, nil unless response.success?

    begin
      roadmap_data = JSON.parse(response.body)

      parse_roadmap(roadmap_data)
    rescue JSON::ParserError => e
      Raven.capture_exception(e)
      Rails.logger.error "Roadmap Data could not be parsed: #{response.body}"
      []
    end
  end

  private def parse_roadmap(data)
    data['data']['releases'].each do |release|
      release['cards'].each do |card|
        item = RoadmapItem.find_or_create_by(rsi_id: card['id'])

        item.update(
          release: release['name'],
          release_description: release['description'],
          rsi_release_id: release['id'],
          released: release['released'].zero? ? false : true,
          rsi_category_id: card['category_id'],
          name: card['name'],
          description: card['description'],
          body: card['body'],
          image: card['thumbnail']['urls']['source'],
          tasks: card['tasks'],
          inprogress: card['inprogress'],
          completed: card['completed']
        )

        next unless item.rsi_category_id == 6 && item.model_id.blank?

        item.update(
          model: Model.where('name ILIKE ?', strip_roadmap_name(card['name'])).first
        )
      end
    end
  end

  private def strip_roadmap_name(name)
    strip_name(name).gsub(/(?:Improvements|Update|Rework|Revision)/, '').strip
  end
end