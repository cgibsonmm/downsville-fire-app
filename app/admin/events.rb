# frozen_string_literal: true

ActiveAdmin.register Event do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :member_id, :title, :start_time, :end_time, :date, :event_type, :description
  #
  # or
  #
  # permit_params do
  #   permitted = [:member_id, :title, :start_time, :end_time, :date, :event_type, :description]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  form partial: 'form'
end
