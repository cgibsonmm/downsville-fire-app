# frozen_string_literal: true

class Api::V1::EventsController < ApiController
  skip_before_action :authenticate_member!, only: [:index]
  def index
    @events = Event.all

    render json: @events, status: :ok
  end

  def create
    @event = current_member.events.build(event_params)

    if @event.save
      render json: @event, status: :created
    else
      render json: { error: @event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_time, :end_time, :type, :date)
  end
end
