class SeriesController < ApplicationController
  before_filter :load_series

  private

  def load_series
    @series = Series.where(name: params[:name]).first
  end
end
