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
    false || (self.user && self.user.has_role?(:client))
  end

  def new?
    false
  end

  def create?
    false
  end

  def update?
    false || (self.user && self.user.has_role?(:client))
  end

  def destroy?
    false
  end
end