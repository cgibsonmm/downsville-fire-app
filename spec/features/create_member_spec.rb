# frozen_string_literal: true

require 'rails_helper'

describe 'Create a Member', type: :request do
  context 'Valid' do
    before do
      post '/api/v1/members', params: { email: Faker::Internet.email, password: Faker::Internet.password }
    end

    it 'can create a valid member' do
      expect(response).to have_http_status(:ok)
    end
  end

  context 'InValid' do
    it 'must have an email' do
      post '/api/v1/members', params: { email: '', password: Faker::Internet.password }
      res = JSON.parse(response.body)
      expect(res).to have_key('errors')
      expect(res['errors']['email']).to include("can't be blank")
    end

    it 'must have a password' do
      post '/api/v1/members', params: { email: Faker::Internet.email, password: '' }
      res = JSON.parse(response.body)
      expect(res).to have_key('errors')
      expect(res['errors']['password']).to include("can't be blank")
    end
  end
end
