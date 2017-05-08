import React from 'react';
import { Router, Route } from 'react-router';
//import App from '../components/app';
import Menu from '../components/static';
import App from '../componentsredux/App';
import About from '../componentsredux/About';
import NotFound from '../componentsredux/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/signup" component={Menu} />
  </Router>
);

export default Routes;
