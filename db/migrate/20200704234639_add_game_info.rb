class AddGameInfo < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :player_name, :string
    add_column :games, :game_type, :string
    add_column :games, :column_values, :integer, array: true, default: []
    add_column :games, :row_values, :integer, array: true, default: []
  end
end
