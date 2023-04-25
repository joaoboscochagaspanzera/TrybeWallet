import mockData from './mockData';

const INITIAL_STATE = {
  wallet: {
    currencies: [
      'USD',
      'CAD',
      'GBP',
      'ARS',
      'BTC',
      'LTC',
      'EUR',
      'JPY',
      'CHF',
      'AUD',
      'CNY',
      'ILS',
      'ETH',
      'XRP',
      'DOGE',
    ],
    expenses: [
      {
        id: 0,
        value: '1',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: 'macarrão',
        exchangeRates: mockData,
      },
      {
        id: 1,
        value: '2',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Lazer',
        description: 'buteco',
        exchangeRates: mockData,
      },
      {
        id: 2,
        value: '3',
        currency: 'USD',
        method: 'Cartão de crédito',
        tag: 'Saúde',
        description: 'Médico',
        exchangeRates: mockData,
      },
    ],
  },
};

export default INITIAL_STATE;
