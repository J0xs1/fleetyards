# encoding: utf-8
# frozen_string_literal: true

json.id user.id
json.email user.email
json.username user.username
json.avatar user.avatar(48)
json.is_admin user.admin?
json.rsi_handle user.rsi_handle
json.rsi_org user.rsi_org
json.sale_notify user.sale_notify
json.created_at user.created_at
json.updated_at user.updated_at
