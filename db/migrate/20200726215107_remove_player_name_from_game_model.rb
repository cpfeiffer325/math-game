class RemovePlayerNameFromGameModel < ActiveRecord::Migration[6.0]
  def change
    remove_column :games, :player_name, :string
  end
end
