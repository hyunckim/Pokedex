import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const RECEIVE_NEW_POKEMON = 'RECEIVE_NEW_POKEMON';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};

export const requestSinglePokemon = (pokemonId) => (dispatch) => (
  APIUtil.fetchPokemon(pokemonId)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
);

export const requestNewPokemon = (pokemon) => (dispatch) => (
    APIUtil.createPokemon(pokemon).then(newPokemon => {
      dispatch(receiveNewPokemon(newPokemon));
      return newPokemon;
    },
    (errors) => {
      return dispatch(receiveErrors(errors.responseJSON));
    })
);

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const receiveNewPokemon = (pokemon) => {
  return ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
  });
};

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERROR,
    errors
});
