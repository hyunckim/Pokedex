import React from 'react';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.id);
  }

  componentWillReceiveProps(newProps){
    this.props.requestSinglePokemon(newProps.params.id);
  }

  render() {
    const { pokemon } = this.props;
    let items = "";

    if (pokemon.items) {
      items = pokemon.items.map((item) => (
        <li key={ item.id }>
          <Link to={`/items/${ item.id }`}>
            <img src={`${item.image_url}`} key={ item.id }></img>
          </Link>
        </li>
      ));
    }
    
    return (
      <section>
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
