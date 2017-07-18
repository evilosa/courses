class CoursePolicy < ApplicationPolicy
  def index?
    admin?
  end

  def show?
     update? || (user? && owner?)
  end

  def update?
    admin? || (client? && owner?)
  end

  private

  def owner?
    self.record.users.include?(self.user)
  end
end