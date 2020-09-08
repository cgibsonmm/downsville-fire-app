class CreateLineOfficers < ActiveRecord::Migration[6.0]
  def change
    create_table :line_officers do |t|
      t.string :Name
      t.integer :YearOfService
      t.text :bio
      t.boolean :rank

      t.timestamps
    end
  end
end
