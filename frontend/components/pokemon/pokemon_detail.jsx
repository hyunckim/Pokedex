import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    const { pokemon } = this.props;
    let items = "";

    if (pokemon.items) {
      items = pokemon.items.map((item) => (
        <li key={ item.id }>
          <Link to={`pokemon/${ pokemon.id }/items/${ item.id }`}>
            <img src={`${item.image_url}`} key={ item.id }></img>
          </Link>
        </li>
      ));
    }

    return (
      <section className="pokemonDetail">
        <figure>
          <img src={ pokemon.image_url } />
        </figure>
        <ul>
          <li>{ pokemon.name }</li>
          <li>{ pokemon.poke_type }</li>
          <li>{ pokemon.attack }</li>
          <li>{ pokemon.defense }</li>
          <li>{ pokemon.moves }</li>
        </ul>
        <section>
          <ul>
            { items }
          </ul>
          { this.props.children }
        </section>
      </section>
    );
  }
}

export default PokemonDetail;
