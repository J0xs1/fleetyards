class CreateFleets < ActiveRecord::Migration[5.1]
  def change
    create_table :fleets, id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
      t.string :name
      t.string :logo
      t.string :sid
      t.string :archetype
      t.string :main_activity
      t.string :secondary_activity
      t.boolean :recruiting
      t.string :commitment
      t.boolean :rpg
      t.boolean :exclusive
      t.integer :member_count

      t.timestamps
    end
  end
end