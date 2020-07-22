# frozen_string_literal: true

class WelcomeController < ApplicationController
  before_action :authenticate_local_member!

  def index
    @events = @current_member.events
  end
end
