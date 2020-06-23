# frozen_string_literal: true

module Helpers
  def login(member)
    post '/api/v1/auth', params: { email: member.email, password: member.password }
    JSON.parse(response.body)['token']
  end
end
