class DiscourseController < ApplicationController

  def sso
    secret = 'd836444a9e4084d5b224a60c208dce14'
    sso = SingleSignOn.parse(request.query_string, secret)
    sso.email = "bojkov@sorc.ru"
    sso.name = "Bojkov"
    sso.username = "Bojkov"
    sso.external_id = "123" # unique id for each user of your application
    sso.sso_secret = secret

    redirect_to sso.to_url("http://tech.evilosa.com/session/sso_login")
  end
end