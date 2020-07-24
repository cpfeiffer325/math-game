class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.integer :game_time
      t.integer :player_id
      t.integer :game_id

      t.timestamps
    end
  end
end
