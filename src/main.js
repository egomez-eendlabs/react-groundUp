'use strinct';

var React = require('react');
var ReactDOM = require('react-dom');
var AppRoutes = require('./router.js');

var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(<AppRoutes/>, document.getElementById('app'));
