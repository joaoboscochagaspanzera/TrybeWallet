import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEmail } from '../redux/actions';
import '../css/Login.css';

const MIN_PASSWORD = 6;

class Login extends Component {
  state = {
    emailInput: '',
    password: '',
  };

  handleEmailChange = ({ target }) => {
    const { value } = target;
    this.setState({ emailInput: value });
  };

  handlePasswordChange = ({ target }) => {
    const { value } = target;
    this.setState({ password: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { emailInput } = this.state;
    dispatch(addEmail(emailInput));
    history.push('/carteira');
  };

  validateEmail = (emailInput) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(emailInput);
  };

  validatePassword = (password) => password.length >= MIN_PASSWORD;

  render() {
    const { emailInput, password } = this.state;
    const isValid = this.validateEmail(emailInput) && this.validatePassword(password);
    return (
      <div className="login-container">
        <div className="login-box">
          <form className="login-form">
            <label className="login-label">
              Email:
              <input
                type="email"
                name="email"
                data-testid="email-input"
                value={ emailInput }
                onChange={ this.handleEmailChange }
                className="input-email"
                required
              />
            </label>
            <label className="login-label">
              Senha:
              <input
                type="password"
                name="password"
                data-testid="password-input"
                minLength={ 6 }
                value={ password }
                onChange={ this.handlePasswordChange }
                className="input-password"
                required
              />
            </label>
            <button
              type="submit"
              onClick={ this.handleSubmit }
              disabled={ !isValid }
              className="button-submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Login);
