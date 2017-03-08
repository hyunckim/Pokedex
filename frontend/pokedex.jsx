import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestAllPokemon } from './actions/pokemon_actions';
import * as APIUtil from './util/api_util';
import { selectAllPokemon } from './reducers/selectors';

window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);
});
