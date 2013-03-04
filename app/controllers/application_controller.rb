class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :load_all_series

  def about; @about = true; end
  def contact; @contact = true; end

  private

  def load_all_series
    @all_series = Series.all
    @default    = @all_series.first
  end
end
