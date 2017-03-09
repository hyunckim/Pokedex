import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  let output = {};
  state.pokemonDetail.items.forEach((item) => {
    if (item.id === itemId) {
      output = item;
    }
  });
  return output;
};
