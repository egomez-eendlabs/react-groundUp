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
  
  _onChange: function(){
    this.setState({authors: AuthorApi.getAllAuthors()});
  },
  
  componentWillMount: function(){
    AuthorStores.addChageListener(this._onChange);
  }
  
  //clean up when this component is unmounted
  componentWillUnmount: function(){
    AuthorStores.removeListener(this._onChange);
  }
  
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