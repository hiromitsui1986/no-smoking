class PostsController < ApplicationController

  def index  
   @post = Post.first
   
   if @post.nil?
      redirect_to top_posts_path  
   end
  end

  def top
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @post = Post.new
    @post = Post.first
  end
  
  
  def update
    post = Post.first
    post.update(post_params)
    redirect_to root_path
  end

  def destroy
    post = Post.first
    post.destroy
    redirect_to top_posts_path
  end

  private
  def post_params
    { price: params[:post][:price], brand:  params[:post][:brand] }
  end
end
