class Admins::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_admin!, only: [:new, :create]

  # Overriding the Devise default actions
  def new
    super
  end

  def create
    super
  end
end
