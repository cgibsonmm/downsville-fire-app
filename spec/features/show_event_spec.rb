# frozen_string_literal: true

require 'rails_helper'

describe 'Show Event', type: :request do
  before do
    20.times do
      @events = create(:event)
    end
  end

  it 'should return a event by id' do
    @event = Event.all.sample

    get("/api/v1/events/#{@event.id}")

    res = JSON.parse(response.body)
    expect(response).to have_http_status(200)

    expect(res).to be_a(Hash)
    expect(res['title']).to be_a(String)
  end
end
