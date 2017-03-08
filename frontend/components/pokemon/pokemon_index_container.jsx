import React from 'react';
import { PokemonIndex } from './pokemon_index';
import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import {requestAllPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = state => {
  return {
    pokemon: selectAllPokemon(state)
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
