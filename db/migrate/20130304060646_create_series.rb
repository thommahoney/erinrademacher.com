class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :display_name
      t.string :name
      t.integer :image_count
      t.integer :index

      t.timestamps
    end

    add_index :series, :name
  end
end
