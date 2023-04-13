import { CURRENCIES_REQUEST } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return {
      ...state,
      currencies: action.payload.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
