class Series < ActiveRecord::Base
  attr_accessible :display_name, :image_count, :index, :name

  default_scope order(:index)
  scope :default, where(index: 0).first
end
