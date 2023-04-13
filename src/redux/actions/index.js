// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const CURRENCIES_REQUEST = 'CURRENCIES_REQUEST';

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
