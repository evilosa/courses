class Api::V1::CoursesController < Api::V1::BaseController
  before_action :load_course, only: [:show, :destroy]

  def index
    respond_with @courses = Course.all
  end

  def create
    @course = Course.create(course_params)
    render json: true
  end

  def show
    respond_with @course
  end

  def update
    begin
      @course = Course.find(params[:id])
      if @course.update(course_params)
        head :no_content
      else
        raise @course.errors
      end
    rescue Exception => ex
      render json: { error: ex.message }, status: :unprocessable_entity
    end
  end

  def destroy
    respond_with (@course.destroy)
  end

  private

  def load_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:id, :created_at, :updated_at, :title, :full_name, :description)
  end
end