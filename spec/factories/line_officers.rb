FactoryBot.define do
  factory :line_officer do
    Name { "MyString" }
    YearOfService { 1 }
    bio { "MyText" }
    rank { false }
  end
end
