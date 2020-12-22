import React, { useMemo, useCallback, useState } from 'react';
import jwt_decode from 'jwt-decode';
import * as AuthApi from '../api/auth-api';
import { getToken, setToken } from '../utils/auth';

const AuthContext = React.createContext(null);
AuthContext.displayName = 'AuthContext';

function AuthProvider(props) {
  const token = getToken();
  const [user, setUser] = useState(token ? jwt_decode(token) : null);

  const login = useCallback(
    (loginForm) => AuthApi.login(loginForm)
      .then((result) => {
        setToken(result.token);
        setUser(jwt_decode(result.token));
      }), [setUser],
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, [setUser]);

  const providerValue = useMemo(
    () => ({ user, login, logout }),
    [login, logout, user],
  );

  return <AuthContext.Provider value={providerValue} {...props} />;
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
