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
        <li>
          { pokemon.name }
          <img src={ pokemon.image_url }></img>
        </li>
      </Link>
    );
  }
}

export default PokemonIndexItem;
