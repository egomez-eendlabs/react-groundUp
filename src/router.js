'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var HomePage = require('./components/homePage');
var AuthorPage = require('./components/authors/authorPage');
var AboutPage = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var NotFoundPage = require('./components/notFoundPage');
var ManageAuthorPage = require('./components/authors/manageAuthorPage');

var AppRoutes = React.createClass({
  render: function(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage}></IndexRoute>
          <Route path="home" component={HomePage}></Route>
          <Route path="authors" component={AuthorPage}></Route>
          <Route path="author" component={ManageAuthorPage}></Route>
          <Route path="about" component={AboutPage}></Route>
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
