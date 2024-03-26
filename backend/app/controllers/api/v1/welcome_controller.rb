class Api::V1::WelcomeController < ApplicationController
  def index
    render json: { message: "Welcome Challenger" }
  end
end
