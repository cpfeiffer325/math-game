class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.integer :duration
      t.integer :game_id
      t.integer :player_id
      t.jsonb :column_values, array: true, default: []
      t.jsonb :row_values, array: true, default: []

      t.timestamps
    end
  end
end
