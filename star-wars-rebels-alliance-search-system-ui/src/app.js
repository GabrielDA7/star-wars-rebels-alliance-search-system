import React from 'react';
import { useAuth } from './contexts/auth-context';
import Header from './components/header';
import AuthenticatedRoutes from './routes/authenticated-routes';
import UnauthenticatedRoutes from './routes/unauthenticated-routes';

function App() {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <main>
        {user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </main>
    </>
  );
}

export default App;
