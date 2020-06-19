# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def create
    @member = Member.new(sign_up_params)
    if @member.save
      render json: @member
    else
      render json: { errors: @member.errors }
    end
  end

  private

  def sign_up_params
    params.permit(:email, :password, :password_confirmation)
  end
end
