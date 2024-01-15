import { routes } from 'app/routes';
import React from 'react';
import { useRoutes } from 'react-router';

function App() {
  const content = useRoutes(routes);
  return <React.Fragment>{content}</React.Fragment>;
}

export default App;
