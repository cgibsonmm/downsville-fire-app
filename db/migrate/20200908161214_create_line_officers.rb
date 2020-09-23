# frozen_string_literal: true

class CreateLineOfficers < ActiveRecord::Migration[6.0]
  def change
    create_table :line_officers do |t|
      t.string :name
      t.integer :years_of_service
      t.text :bio
      t.boolean :rank

      t.timestamps
    end
  end
end
