class AddGameIdColumnToHighscores < ActiveRecord::Migration[6.0]
  def change
    remove_column :highscores, :player_name, :string
  end
end
