class VersionTwo < ActiveRecord::Migration[6.0]
  def change
    rename_table :events, :matches
    rename_column :matches, :game_time, :duration
    add_column :matches, :column_values, :jsonb, default: "[]"
    add_column :matches, :row_values, :jsonb, default: "[]"

    add_column :games, :operator, :integer
    remove_column :games, :difficulty
    add_column :games, :difficulty, :integer
    remove_column :games, :row_values
    remove_column :games, :column_values
    add_column :games, :max_value, :integer
    add_column :games, :min_value, :integer
    add_column :games, :grid_size, :integer

    remove_column :players, :remember_created_at
  end
end
