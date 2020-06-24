class ManagersController < ApplicationController
  def index
    @managers = User.all
    render json: @managers
  end

  def show
    @manager = User.find([params[:id]])
    render json: @manager
  end
end
