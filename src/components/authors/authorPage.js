'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthorStores = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
  getInitialState: function(){
    return {
      authors: AuthorStores.getAllAuthors()
    };
  },
  
  render: function(){

    return (
      <div>
        <h1>Authors</h1>
        <Link to="/author" className="btn btn-default">Add Author</Link>
        <AuthorList authors = {this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;