class Api::V1::CoursesController < Api::V1::BaseController
  before_action :load_course, only: [:show, :update, :destroy]

  def index
    render json: Course.all
  end

  def create
    @course = Course.new(course_params)
    if (@course.save)
      render json: @course
    else
      render json: {errors: @course.errors.full_messages}, status: 422
    end
  end

  def show
    respond_with @course
  end

  def update
    if (@course.update(course_params))
      render json: @course
    else
      render json: {errors: @course.errors.full_messages}, status: 422
    end
  end

  def destroy
    if (@course.destroy)
      render json: @course
    else
      render json: {errors: @course.errors.full_messages}, status: 422
    end
  end

  private

  def load_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:id, :title, :full_name, :description, :client_id, :created_at, :updated_at )
  end
end