class Api::V1::Users::SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate!(auth_options)
    sign_in(resource_name, resource)
    yield resource if block_given?
    render json: { user: current_user, auth_token: JWTWrapper.encode({user_id:current_user.id}) }
  end

  def destroy
    super
  end
end