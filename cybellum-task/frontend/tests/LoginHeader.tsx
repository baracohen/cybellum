import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginHeader from '../src/components/loginHeader/loginHeader';

describe('LoginHeader Component', () => {
  test('renders header with Cybellum icon and welcome message', () => {
    render(<LoginHeader />);
    
    // Check if Cybellum icon is present
    const cybellumIcon = screen.getByAltText('Cybellum');
    expect(cybellumIcon).toBeInTheDocument();
    expect(cybellumIcon).toHaveAttribute('src', 'src/assets/images/login/cybellum-sign.svg'); 
    
    // Check if welcome message is present
    const welcomeMessage = screen.getByText('Welcome to the Product Security Platform');
    expect(welcomeMessage).toBeInTheDocument();
  });

});
