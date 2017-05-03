import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import Menu from 'components/static';
import 'css/master.css';

render(<Menu />, document.getElementById('menu'));
render(<App />, document.getElementById('app'));


	
