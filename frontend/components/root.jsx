import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';
import ItemDetailContainer from './item/item_detail_container';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ PokemonIndexContainer }>
        <IndexRoute component={ PokemonFormContainer } />
        <Route path="/pokemon/:pokemonId" component={ PokemonDetailContainer }>
          <Route path="items/:itemId" component={ ItemDetailContainer } />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default Root;
