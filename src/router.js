'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var NotFoundPage = require('./components/notFoundPage');

var AppRoutes = React.createClass({
  render: function(){
    return (
      <Router history={hashHistory}>
        <Route name="app" path="/" component={App}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route name="home" path="/home" component={HomePage}></Route>
          <Route name="authors" path="/authors" component={AuthorPage}></Route>
          <Route name="about" path="/about" component={AboutPage}></Route>
          <Redirect from="awuthors" to="authors"></Redirect>
          <Redirect from="awthors" to="authors"></Redirect>
          <Redirect from="about-us" to="about"></Redirect>
          <Redirect from="about/*" to="about"></Redirect>
          <Route path="*" component={NotFoundPage}></Route>
        </Route>
      </Router>
    );
  }
});

module.exports = AppRoutes;
