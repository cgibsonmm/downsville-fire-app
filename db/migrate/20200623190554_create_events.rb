# frozen_string_literal: true

class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.references :member, null: false, foreign_key: true
      t.string :title
      t.time :start_time
      t.time :end_time
      t.datetime :date

      t.timestamps
    end
  end
end
