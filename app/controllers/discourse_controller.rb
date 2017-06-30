class DiscourseController < ApplicationController

  def sso
    secret = 'd836444a9e4084d5b224a60c208dce14'
    sso = SingleSignOn.parse(request.query_string, secret)
    sso.email = 'bojkov@mbconsalting.ru'
    sso.name = 'Evilosa'
    sso.username = 'Evilosa'
    sso.avatar_url = 'https://robohash.org/test'
    sso.avatar_force_update = false
    sso.require_activation = false
    sso.external_id = "123" # unique id for each user of your application
    sso.sso_secret = secret
    sso.sso_url = 'http://tech.evilosa.com/session/sso_login'

    redirect_to sso.to_url(sso.sso_url)
    # redirect_to sso.to_url("http://tech.evilosa.com/session/sso_login")
  end
end