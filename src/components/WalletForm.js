import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchCurrencies,
  addExpenses,
  fetchCurrency } from '../redux/actions';

class WalletForm extends Component {
  state = {
    valueInput: '0',
    descriptionInput: '',
    currencyInput: 'USD',
    methodInput: 'Dinheiro',
    tagInput: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { id, dispatch } = this.props;
    const { valueInput, descriptionInput,
      currencyInput, methodInput, tagInput } = this.state;
    const exchangeRates = await fetchCurrency();
    const ask = valueInput * (exchangeRates[currencyInput].ask);
    dispatch(addExpenses({
      id,
      value: valueInput,
      description: descriptionInput,
      currency: currencyInput,
      method: methodInput,
      tag: tagInput,
      exchangeRates,
    }, ask));
    this.setState({
      valueInput: '',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
    });
  };

  render() {
    const { currencies } = this.props;
    const { valueInput, descriptionInput,
      currencyInput, methodInput, tagInput } = this.state;
    return (
      <form className="WalletForm">
        <label>
          Valor da despesa:
          <input
            type="number"
            name="valueInput"
            value={ valueInput }
            onChange={ this.handleChange }
            data-testid="value-input"
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            type="text"
            name="descriptionInput"
            value={ descriptionInput }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>
        <br />
        <label>
          Moeda:
          <select
            name="currencyInput"
            value={ currencyInput }
            onChange={ this.handleChange }
            data-testid="currency-input"
          >
            {currencies.map((curr) => (
              <option key={ curr } value={ curr }>
                {curr}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Método de pagamento:
          <select
            name="methodInput"
            value={ methodInput }
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <br />
        <label>
          Categoria:
          <select
            name="tagInput"
            value={ tagInput }
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <br />
        <button
          type="submit"
          onClick={ this.handleSubmit }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  id: wallet.expenses.length,
});

export default connect(mapStateToProps)(WalletForm);
