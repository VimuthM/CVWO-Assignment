class SessionsController < ApplicationController
  def index
  end
  def omniauth
    @user = User.from_omniauth(auth)
    @user.save
    session[:user_id] = @user.id
    redirect_to home_path
    
  end

  def destroy
    session.clear
    redirect_to root
  end
  
  private
  def auth
    request.env['omniauth.auth']
  end
end
