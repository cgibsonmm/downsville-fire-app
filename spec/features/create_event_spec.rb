# frozen_string_literal: true

require 'rails_helper'

describe 'Creating an event', type: :request do
  before do
    @member = create(:member)
  end

  context 'Login in member' do
    before do
      @token = login(@member)
    end

    it 'should create a event' do
      post '/api/v1/events', params: { event: { title: 'BBQ', start_time: Faker::Time.between(from: DateTime.now, to: DateTime.now + 24), end_time: Faker::Time.between(from: DateTime.now + 24, to: DateTime.now + 28) } }, headers: { "Authorization": @token }
      res = JSON.parse(response.body)
      expect(response).to have_http_status(201)
      expect(res['title']).to eq('BBQ')
    end

    context 'title' do
      it 'should be present' do
        post '/api/v1/events', params: { event: { title: '', start_time: Faker::Time.between(from: DateTime.now, to: DateTime.now + 24), end_time: Faker::Time.between(from: DateTime.now + 24, to: DateTime.now + 28) } }, headers: { "Authorization": @token }
        res = JSON.parse(response.body)
        expect(res['error']).to include("Title can't be blank")
        expect(response).to have_http_status(422)
      end

      it 'should be at least 3 chars' do
        post '/api/v1/events', params: { event: { title: 'aa', start_time: Faker::Time.between(from: DateTime.now, to: DateTime.now + 24), end_time: Faker::Time.between(from: DateTime.now + 24, to: DateTime.now + 28) } }, headers: { "Authorization": @token }
        res = JSON.parse(response.body)
        expect(res['error']).to include('Title is too short (minimum is 3 characters)')
        expect(response).to have_http_status(422)
      end
    end
  end
end
