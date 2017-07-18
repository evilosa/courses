class ClientPolicy < ApplicationPolicy
  def index?
    self.user.has_role?(:admin)
  end

  def show?
    (self.user.has_role?(:client) && self.record.users.include?(self.user)) || self.user.has_role?(:admin)
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
    self.user.has_role?(:admin)
  end
end