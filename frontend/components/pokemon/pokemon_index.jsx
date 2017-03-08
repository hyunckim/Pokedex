import React from 'react';

export class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemons = this.props.pokemon.map((pokemon) => {
       return <Pokemon key={ pokemon.id }name={ pokemon.name } imageUrl={ pokemon.image_url }/>;
    });

    return(
      <div>
        <ul>
          { pokemons }
        </ul>
      </div>
    );
  }
}


const Pokemon = ({name, imageUrl}) => {
  return (
    <li>
      { name }
      <img src={ imageUrl }></img>
    </li>
  );
};
