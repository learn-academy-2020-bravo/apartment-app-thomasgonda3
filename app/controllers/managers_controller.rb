class ManagersController < ApplicationController
  def index
    @managers = Manager.all
    render json: @managers
  end

  def show
    @manager = Manager.find([params[:id]])
    render json: @manager
  end
end
