class EventsController < ApplicationController
  def update
    @event = Event.find(params[:id])
    @event.game_time = Time.now - @event.created_at
    @event.save
  end
end
