# frozen_string_literal: true

class Api::V1::LineOfficersController < ApiController
  skip_before_action :authenticate_member!
  def index
    @officers = LineOfficer.all
    render json: @officers
  end
end
