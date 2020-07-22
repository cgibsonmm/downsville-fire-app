# frozen_string_literal: true

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  def authenticate_local_member!
    @current_member = Member.find(session['warden.user.member.key'][0][0]) if session['warden.user.member.key']
    redirect_to new_member_session_url unless @current_member
    @current_member
  end
end
