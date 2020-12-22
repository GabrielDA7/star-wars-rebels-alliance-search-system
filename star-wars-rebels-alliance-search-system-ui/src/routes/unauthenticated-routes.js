import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../pages/not-found-page';
import LoginPage from '../pages/login-page';

function UnauthenticatedRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/not-found">
        <NotFoundPage />
      </Route>
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
}

export default UnauthenticatedRoutes;
