# frozen_string_literal: true

class Hardpoint < ApplicationRecord
  belongs_to :model
  belongs_to :component, optional: true

  validates :model_id, presence: true

  def self.undeleted
    where(deleted_at: nil)
  end
end
