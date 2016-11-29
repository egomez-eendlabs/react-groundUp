'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');

var ManageAuthorPage = React.createClass({
  getInitialState: function(){
    return {
      author : {id: '', firstName: '', lastName: ''}
    };
  },
  
  saveAuthor: function(){
    AuthorApi.saveAuthor(this.state.author);
  },
  
  setAuthorState: function(event){
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  
  render: function(){
    return (
      <div>
        <h1>Manage Author</h1>
        <AuthorForm author={this.state.author} onChange={this.setAuthorState} 
          onSave={this.saveAuthor}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;