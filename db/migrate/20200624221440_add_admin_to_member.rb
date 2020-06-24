# frozen_string_literal: true

class AddAdminToMember < ActiveRecord::Migration[6.0]
  def change
    add_column :members, :admin, :boolean, default: false
  end
end
