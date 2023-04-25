import {
  CURRENCIES_REQUEST,
  ADD_EXPENSES,
  DEL_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  ask: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_REQUEST:
    return {
      ...state,
      currencies: action.payload.currencies,
    };

  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload.expenses],
      ask: state.ask + action.payload.ask,
    };

  case DEL_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter((e) => e !== action.payload.expenses)],
    };

  default:
    return state;
  }
};

export default wallet;
