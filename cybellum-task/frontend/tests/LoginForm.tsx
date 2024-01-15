import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../src/components/loginForm/loginForm';
import { useLoginMutation } from '../src/api/auth/auth';

// Mocking react-query's useLoginMutation
jest.mock('../../api/auth/auth', () => ({
  useLoginMutation: jest.fn(),
}));

describe('LoginForm Component', () => {
  test('renders login form with fields and buttons', () => {
    render(<LoginForm />);
    
    const emailInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const forgotPasswordLink = screen.getByText('Forgot your password?');
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const mockTrigger = jest.fn();
    (useLoginMutation as jest.Mock).mockReturnValue([mockTrigger, { data: null, error: null }]);
    
    render(<LoginForm />);
    
    const emailInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(mockTrigger).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});
