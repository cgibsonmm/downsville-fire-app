# frozen_string_literal: true

require 'rails_helper'

describe 'member login', type: :request do
  before do
    @member = create(:member, password: '1234567')
  end

  context 'Valid' do
    it 'can login' do
      post '/api/v1/auth', params: { email: @member.email, password: @member.password }
      res = JSON.parse(response.body)
      expect(res).to have_key('token')
      expect(res).not_to have_key('errors')
    end
  end

  context 'InValid' do
    it 'should have a valid email' do
      post '/api/v1/auth', params: { email: '', password: @member.password }
      res = JSON.parse(response.body)
      expect(res).to have_key('errors')
      expect(res['errors']).to eq('invalid email or password')
    end

    it 'should have a valid password' do
      post '/api/v1/auth', params: { email: @member.email, password: '123' }
      res = JSON.parse(response.body)
      expect(res).to have_key('errors')
      expect(res['errors']).to eq('invalid email or password')
    end
  end
end
