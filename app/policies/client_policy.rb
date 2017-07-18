class ClientPolicy < ApplicationPolicy
  def index?
    self.user.has_role?(:admin)
  end

  def show?
    false || (self.user && self.user.has_role?(:client))
  end

  def new?
    false
  end

  def create?
    self.user.has_role?(:admin)
  end

  def update?
    false || (self.user && self.user.has_role?(:client))
  end

  def destroy?
    false
  end
end