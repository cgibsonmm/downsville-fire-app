# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :member

  validates :title, presence: true, length: { minimum: 3 }
  validates_datetime :date
end
