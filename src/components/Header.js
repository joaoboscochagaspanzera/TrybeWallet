import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { email, expenses } = this.props;
    const { currency } = this.state;
    const total = expenses.reduce((acc, curr) => {
      const sum = (Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask));
      return (Number(acc) + sum);
    }, 0);
    return (
      <header className="header-container">
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          {total.toFixed(2)}
          <br />
          {currency}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.user,
  ...state.wallet,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default connect(mapStateToProps)(Header);
