import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../src/pages/login/Login';

describe('Login Page', () => {
  test('renders login page with header and form', () => {
    render(<Login />);
    expect(screen.getByText('Welcome to the Product Security Platform')).toBeInTheDocument(); 
    expect(screen.getByLabelText('User Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('displays bottom links', () => {
    render(<Login />);
    const privacyLink = screen.getByText('Privacy policy');
    const termsLink = screen.getByText('Terms of use');
    const contactLink = screen.getByText('Contact us');

    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    userEvent.click(privacyLink);
    expect(window.location.pathname).toBe('/privacy-policy');
    // Repeat the above for other links
  });

  test('displays the correct image', () => {
    render(<Login />);
    const image = screen.getByAltText('Digital Twins');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'src/assets/images/login/cybellum-sign.svg');
  });

});
