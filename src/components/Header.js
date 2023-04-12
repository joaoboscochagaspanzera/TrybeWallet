import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    total: 0,
    currency: 'BRL',
  };

  render() {
    const { email } = this.props;
    const { total, currency } = this.state;
    return (
      <header>
        <div data-testid="email-field">
          Email:
          {email}
        </div>
        <div data-testid="total-field">
          Total:
          {total}
        </div>
        <div data-testid="header-currency-field">
          Currency:
          {currency}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
