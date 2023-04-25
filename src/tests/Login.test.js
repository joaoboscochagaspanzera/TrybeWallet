import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

const emailTestId = 'email-input';
const passwordTestId = 'password-input';
const email = 'tryber@teste.com';

describe('pagina inicial', () => {
  it('procura por elementos na página', () => {
    renderWithRouterAndRedux(<App />);

    const emailEl = screen.getByTestId(emailTestId);
    expect(emailEl).toBeInTheDocument();

    const passwordEl = screen.getByTestId(passwordTestId);
    expect(passwordEl).toBeInTheDocument();

    const buttonEl = screen.getByRole('button', { name: /entrar/i });
    expect(buttonEl).toBeInTheDocument();
  });

  it('enviar para página correta ao clicar no botão', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailEle = screen.getByTestId(emailTestId);
    const passwordEl = screen.getByTestId(passwordTestId);
    userEvent.type(emailEle, email);
    userEvent.type(passwordEl, '681372');

    const buttonEl = screen.getByRole('button', { name: /entrar/i });
    userEvent.click(buttonEl);

    expect(history.location.pathname).toBe('/carteira');
  });

  it('validação de email', () => {
    renderWithRouterAndRedux(<App />);
    const emailEl = screen.getByTestId(emailTestId);
    const passwordEl = screen.getByTestId(passwordTestId);
    userEvent.type(emailEl, 'trybeinvalid');
    userEvent.type(passwordEl, '123');

    const buttonEl = screen.getByRole('button', { name: /entrar/i });
    expect(buttonEl).toBeDisabled();
  });

  it('validação de senha', () => {
    renderWithRouterAndRedux(<App />);
    const emailEle = screen.getByTestId(emailTestId);
    const passwordEl = screen.getByTestId(passwordTestId);
    userEvent.type(emailEle, email);
    userEvent.type(passwordEl, '842');

    const buttonEl = screen.getByRole('button', { name: /entrar/i });
    expect(buttonEl).toBeDisabled();
  });

  it('ativação do botão', () => {
    renderWithRouterAndRedux(<App />);
    const emailEle = screen.getByTestId(emailTestId);
    const passwordEl = screen.getByTestId(passwordTestId);
    userEvent.type(emailEle, email);
    userEvent.type(passwordEl, '681372');

    const buttonEl = screen.getByRole('button', { name: /entrar/i });
    expect(buttonEl).toBeEnabled();
  });
});
