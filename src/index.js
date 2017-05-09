import React from 'react';
import { render } from 'react-dom';
var SchoolsList = require("./components2/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = [];
import App from 'components/app';
import Menu from 'components/static';
import 'css/master.css';

var getSchoolsCallback = function(schools){
    _schools = schools;
    render();
};
schoolsStore.onChange(getSchoolsCallback);


render(<Menu />, document.getElementById('menu'));
render(<SchoolsList schools={_schools}  />, document.getElementById('form'));
render(<App />, document.getElementById('app'));