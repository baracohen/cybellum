import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import  Home from '../src/pages/home/Home';
import { useGetNotificationMutation } from '../src/api/notifications/notifications';

// Mocking react-query's useGetNotificationMutation
jest.mock('api/notifications/notifications', () => ({
  useGetNotificationMutation: jest.fn(),
}));

describe('Home Page', () => {
  test('renders home component with notification content', async () => {
    const mockTrigger = jest.fn();
    (useGetNotificationMutation as jest.Mock).mockReturnValue([mockTrigger, { data: { description: 'Notification Content' }, error: null }]);
    
    render(<Home />);
    
    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      const notificationContent = screen.getByText('Notification Content');
      expect(notificationContent).toBeInTheDocument();
    });
  });

  test('redirects to login page when not authenticated', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    render(<Home />);
    
    // Ensure the component redirects to the login page when not authenticated
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

});
