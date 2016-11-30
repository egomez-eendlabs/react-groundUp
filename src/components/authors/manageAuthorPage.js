'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var AuthorForm = require('./authorForm');
var AuthorStore = require('../../stores/authorStore');
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  getInitialState: function(){
    return {
      author : {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false
    };
  },
  
  componentDidMount: function(){
    var self = this;
    this.props.router.setRouteLeaveHook(this.props.route, function() {
      if (self.state.dirty){
        return 'Leaving wihtout saving?';
      }
    });
  },
  
  componentWillMount: function(){
    var authorId = this.props.params.id;
    
    if(authorId) {
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },

  authorFormIsValid: function(){
    var formIsValid = true;
    this.state.errors = {};
    
    if(this.state.author.firstName.length < 3){
      this.state.errors.firstName = 'First name must be at least 3 characters';
      formIsValid = false;
    }
    
    if(this.state.author.lastName.length < 3){
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }
    
    this.setState({errors: this.state.errors});
    return formIsValid;
  },
  
  saveAuthor: function(event){
    event.preventDefault();
    
    if(!this.authorFormIsValid()){
      return;
    }
    
    AuthorActions.createAuthor(this.state.author);
    debugger;
    this.setState({dirty: false});
    toastr.success('Author saved!');
    hashHistory.push('authors');
  },
  
  setAuthorState: function(event){
    this.setState({dirty: true});
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
          onSave={this.saveAuthor} errors={this.state.errors}/>
      </div>
    );
  }
});

module.exports = ManageAuthorPage;