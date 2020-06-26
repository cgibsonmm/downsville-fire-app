# frozen_string_literal: true

require 'rails_helper'

describe 'Show Event', type: :request do
  before do
    20.times do
      e = create(:event)
    end
  end

  it 'should return a event by id' do
    id = (1..20).to_a.sample
    get("/api/v1/events/#{id}")

    res = JSON.parse(response.body)
    expect(response).to have_http_status(200)
    expect(res['title']).to be_a(String)
  end
end
