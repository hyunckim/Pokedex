import { RECEIVE_ERROR } from '../actions/pokemon_actions';

const ErrorReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ERROR:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorReducer;
