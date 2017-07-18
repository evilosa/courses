class Api::V1::Users::SessionsController < Devise::SessionsController
  def show
    skip_authorization
    super
  end

  def create
    skip_authorization
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    render json: { user: current_user, auth_token: JWTWrapper.encode({user_id:current_user.id}) }
  end

  def destroy
    skip_authorization
    super
  end
end