import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import AlbumShowcase from './AlbumShowcase';
import Error from './Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route
          path='/:artist/:album/:link/:year/:url'
          component={AlbumShowcase}
        />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
