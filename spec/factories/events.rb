# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    member { create(:member) }
    title { Faker::Marketing.buzzwords }
    start_time { '' }
    end_time { '' }
    date { Faker::Time.between(from: DateTime.now + 24, to: DateTime.now + 100) }
  end
end
