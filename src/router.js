'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');

var AppRoutes = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/authors" component={AuthorPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
        </Route>
      </Router>
    );
  }
});

module.exports = AppRoutes;
