# frozen_string_literal: true

json.name shop.name
json.slug shop.slug
json.type shop.shop_type
json.type_label shop.shop_type_label
json.location_label shop.location_label
json.rental shop.rental
json.buying shop.buying
json.selling shop.selling
json.store_image shop.store_image.url
json.store_image_medium shop.store_image.medium.url
json.store_image_small shop.store_image.small.url
json.station do
  json.partial! 'api/v1/shops/station', station: shop.station
end
