import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemons = this.props.pokemon.map((pokemon) => {
      return <PokemonIndexItem key={ pokemon.id } pokemon={ pokemon }/>;
    });

    return(
      <div>
        <ul>
          { pokemons }
        </ul>
        { this.props.children }
      </div>
    );
  }
}
