class CreateHighscores < ActiveRecord::Migration[6.0]
  def change
    create_table :highscores do |t|
      t.integer :player_id
      t.integer :game_id
      t.string :game_time

      t.timestamps
    end
  end
end
