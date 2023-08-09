class HomeController < ApplicationController
  def index
    @visual_works = VisualWork.all
  end
end
