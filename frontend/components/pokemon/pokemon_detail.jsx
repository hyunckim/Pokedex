import React from 'react';

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
      </section>
    );
  }
}

export default PokemonDetail;
