import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QueryParamProvider, transformSearchStringJsonSafe } from 'use-query-params';
import { AuthProvider } from './auth-context';
import { theme } from '../theme';

const queryStringifyOptions = {
  transformSearchString: transformSearchStringJsonSafe,
};

function AppProviders({ children }) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <QueryParamProvider ReactRouterRoute={Route} stringifyOptions={queryStringifyOptions}>
            {children}
          </QueryParamProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export { AppProviders };
