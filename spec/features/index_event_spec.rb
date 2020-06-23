# frozen_string_literal: true

require 'rails_helper'

describe 'Event index', type: :request do
  before do
    @random = (1..100).to_a.sample
    @random.times { create(:event) }
  end
  it 'should return all events' do
    get '/api/v1/events'
    res = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(res.length).to eq(@random)
  end
end
