# frozen_string_literal: true

class Api::V1::EventsController < ApiController
  skip_before_action :authenticate_member!, only: %i[index show]
  def index
    puts Date.today
    # @events = Event.all
    @events = Event.where('date >= ?', Date.today).order('date ASC')
    puts @events.inspect
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

  def show
    @event = Event.find(params['id'])

    render json: @event
  end

  private

  def event_params
    params.require(:event).permit(:title, :description, :start_time, :end_time, :type, :date)
  end
end
