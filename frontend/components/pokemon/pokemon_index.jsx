import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  // componentWillReceiveProps(newProps){
  //   if (this.props.params.pokemonId !== newProps.params.pokemonId) {
  //     this.props.requestAllPokemon();
  //   }
  // }

  render() {
    const pokemons = this.props.pokemon.map((pokemon) => {
      return <PokemonIndexItem key={ pokemon.id } pokemon={ pokemon }/>;
    });

    return(
      <div>
        { this.props.children }
        <ul>
          { pokemons }
        </ul>
      </div>
    );
  }
}
