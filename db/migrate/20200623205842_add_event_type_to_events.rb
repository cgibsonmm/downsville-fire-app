# frozen_string_literal: true

class AddEventTypeToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :event_type, :string, default: 'public'
  end
end
