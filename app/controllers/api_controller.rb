# frozen_string_literal: true

class ApiController < ApplicationController
  before_action :set_default_format
  before_action :authenticate_member!

  private

  def set_default_format
    request.format = :json
  end
end
