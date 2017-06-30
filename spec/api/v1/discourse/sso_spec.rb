describe 'Discourse sso api' do

  let!(:sso_secret) { 'd836444a9e4084d5b224a60c208dce14' }
  let!(:sso_url) { '/discourse/sso' }
  let!(:sso_callback_url) { 'discourse/callback' }
  let!(:nonce_generated) { 'cb68251eefb5211e58c00ff1395f0c0b' }
  let!(:raw_payload) { 'nonce=cb68251eefb5211e58c00ff1395f0c0b' }
  let!(:payload_base64) { 'bm9uY2U9Y2I2ODI1MWVlZmI1MjExZTU4YzAwZmYxMzk1ZjBjMGI=\n' }
  let!(:sso ) { 'bm9uY2U9Y2I2ODI1MWVlZmI1MjExZTU4YzAwZmYxMzk1ZjBjMGI%3D%0A' }
  let!(:sig) { '2828aa29899722b35a2f191d34ef9b3ce695e0e6eeec47deb46d588d70c7cb56' }

  let!(:query_string) { "#{sso_url}?sso=#{sso}&sig=#{sig}" }

  describe 'It should validate user' do

    before do
      # do_request
    end

    it 'Name eq sam' do

      sso_result = SingleSignOn.parse(query_string, sso_secret)
      expect(sso_result.name).to eq 'sam'

      # diags = "\n\nsso: #{sso}\n\nsig: #{sig}\n\nexpected sig: #{SingleSignOn.sign(sso)}"
      # if parsed["sso"] =~ /[^a-zA-Z0-9=\r\n\/+]/m
      #
      # end
    end

    it 'Browser redirects to sso_url' do
      expect(do_request.current_path).to eq 'http://tech.evilosa.com/session/sso_login'
    end

  end

  def do_request(params = { sso: sso, sig: sig })
    get query_string
  end
end