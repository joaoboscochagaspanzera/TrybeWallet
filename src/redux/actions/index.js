export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DEL_EXPENSE = 'DEL_EXPENSE';

export const fetchCurrency = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
};

export const addEmail = (email) => ({
  type: ADD_EMAIL,
  payload: {
    email,
  },
});

export const addCurrencies = (currencies) => ({
  type: CURRENCIES_REQUEST,
  payload: {
    currencies,
  },
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data);
  const removeUSDT = currencies.filter((curr) => curr !== 'USDT');
  dispatch(addCurrencies(removeUSDT));
};

export const addExpenses = (expenses, ask) => ({
  type: ADD_EXPENSES,
  payload: {
    expenses,
    ask,
  },
});

export const delExpense = (expenses, ask) => ({
  type: DEL_EXPENSE,
  payload: {
    expenses,
    ask,
  },
});

export const addExchangeRate = (exchangeRate) => ({
  type: ADD_EXCHANGE_RATE,
  payload: {
    exchangeRate,
  },
});

export const fetchExchangeRate = async (currency) => {
  const response = await fetch(`https://economia.awesomeapi.com.br/json/all/${currency}-BRL`);
  const data = await response.json();
  const exchangeRate = data[currency].ask;
  return exchangeRate;
};

export const addValueToGlobalState = (value) => ({
  type: ADD_VALUE_TO_GLOBAL_STATE,
  value,
});
