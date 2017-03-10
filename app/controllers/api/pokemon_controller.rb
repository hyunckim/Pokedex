require 'byebug'

class Api::PokemonController < ApplicationController
  def create
    @pokemon = Pokemon.new(pokemon_params)
    @pokemon.id = Pokemon.last.id + 1
    if @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(
    :name,
    :image_url, :poke_type, :attack, :defense, moves: [])
  end
end
