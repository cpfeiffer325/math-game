class EventsController < ApplicationController
  def update
    @event = Event.find(params[:id])
    @event.game_time = Time.now - @event.created_at
    binding.pry
  end
end
