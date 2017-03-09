import { connect } from 'react-redux';
import React from 'react';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
    items: selectPokemonItem(state, parseInt(ownProps.params.itemId))
  });
};

export default connect(
  mapStateToProps
)(ItemDetail);
