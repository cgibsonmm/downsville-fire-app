# frozen_string_literal: true

class Api::V1::AuthenticationController < ApiController
  skip_before_action :authenticate_member!, only: [:create]
  def create
    member = Member.find_by(email: params[:email])
    if member&.valid_password?(params[:password])
      render json: { token: JsonWebToken.encode(sub: member.id) }
    else
      render json: { errors: 'invalid' }
    end
  end

  def fetch
    render json: current_member
  end
end
