# frozen_string_literal: true

require 'rails_helper'

describe 'Creating an event', type: :request do
  before do
    @member = create(:member)
    @token = login(@member)
  end

  it 'should work' do
    post '/api/v1/events', params: {}, headers: { "Authorization": @token }
  end
end
