import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import Routes from './pages/Pages.jsx';
import 'css/master.css';


ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('app')
);