class ClientPolicy
  attr_reader :user, :client

  def initialize(user, client)
    @user = user
    @client = client
  end

  def index?
    false
  end

  def show?
    false
  end

  def new?
    false
  end

  def create?
    false
  end

  def update?
    false
  end

  def destroy?
    false
  end
end