import React from 'react';
import { Link } from 'react-router';

class PokemonIndexItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { pokemon } = this.props;
    return (
      <Link to={`/pokemon/${ pokemon.id }`}>
        <li className="pokemonIndexItem">
          <section className="pokemonDisplay">
            <article className="pokemonName">
              { pokemon.id }
            </article>
            <img src={ pokemon.image_url } className="pokemonImage"></img>
            <article className="pokemonName">
              { pokemon.name }
            </article>
          </section>
        </li>
      </Link>
    );
  }
}

export default PokemonIndexItem;
