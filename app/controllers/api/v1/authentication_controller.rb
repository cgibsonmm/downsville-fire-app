# frozen_string_literal: true

class Api::V1::AuthenticationController < ApiController
  skip_before_action :authenticate_member!, only: [:create]
  def create
    member = Member.find_by(email: params[:email])
    if member&.valid_password?(params[:password])
      render json: { email: member.email, admin: false, token: JsonWebToken.encode(sub: member.id) }, status: :ok
    else
      render json: { errors: 'invalid email or password' }, status: :bad_request
    end
  end

  def fetch
    render json: { email: current_member.email, admin: false }, status: :ok
  end
end
