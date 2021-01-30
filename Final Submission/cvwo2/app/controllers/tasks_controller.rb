class TasksController < ApplicationController
    def index
        if params[:tag]
          @tasks = current_user.tasks.where("tag like ?", "%#{params[:tag]}%")
        else
          @tasks = current_user.tasks.all
        end
    end

    def show
        @task = current_user.tasks.find(params[:id])
    end
    
    def new
        @task = Task.new
    end
    
    def create
        @task = current_user.tasks.new(task_params)
    
      if @task.save
        redirect_to @task
      else
        render :new
      end
    end

    def edit
      @task = Task.find(params[:id])
    end
  
    def update
      @task = Task.find(params[:id])
  
      if @task.update(task_params)
        redirect_to @task
      else
        render :edit
      end
    end

    def destroy
      @task = Task.find(params[:id])
      @task.destroy
  
      redirect_to home_path
    end
    
    private
      def task_params
        params.require(:task).permit(:title, :body, :tag)
      end    
end
