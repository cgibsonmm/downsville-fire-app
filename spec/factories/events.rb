FactoryBot.define do
  factory :event do
    user { nil }
    title { "MyString" }
    start_time { "" }
    end_time { "" }
    date { "" }
  end
end
