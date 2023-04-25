import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  state = {
    currency: 'BRL',
  };

  render() {
    const { email, total } = this.props;
    const { currency } = this.state;
    return (
      <header className="header-container">
        <div data-testid="email-field">
          {email}
        </div>
        <div data-testid="total-field">
          {total.toFixed(2)}
        </div>
        <div data-testid="header-currency-field">
          {currency}
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  total: wallet.ask,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
