# frozen_string_literal: true

require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@member = Member.find(1)
5.times do
  @e = @member.events.build(title: Faker::Artist.name, description: Faker::Lorem.paragraph_by_chars, date: (Date.today - 2.day))
  @e.save!
end
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?