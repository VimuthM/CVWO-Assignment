class UsersController < ApplicationController
    def index
    end
  
    def show
      @tasks = Task.all
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end  
end
