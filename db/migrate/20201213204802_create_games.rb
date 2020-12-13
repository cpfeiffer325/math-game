class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :game_type
      t.integer :operator
      t.integer :difficulty
      t.integer :max_value
      t.integer :min_value
      t.integer :grid_size

      t.timestamps
    end
  end
end
