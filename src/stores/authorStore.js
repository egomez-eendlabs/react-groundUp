'use strict';

var Dispatcher = require('../Dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var remove = require('lodash.remove');

var CHANGE_ENVENT = 'change';
var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChageListener: function(callback){
    this.on(CHANGE_ENVENT, callback);
  },
  
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_ENVENT, callback);
  },
  
  emitChange: function(){
    this.emit(CHANGE_ENVENT);
  },
  
  getAllAuthors: function(){
    return _authors;
  },
  
  getAuthorById: function(id){
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action){
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
      break;
      case ActionTypes.UPDATE_AUTHOR:
          var existingAuthor = _.find(_authors, {id: action.author.id});
          var existingauthorIndex = _.indexOf(_authors, existingAuthor);
          _authors.splice(existingauthorIndex, 1, action.author);
          AuthorStore.emitChange();
        break;
      case ActionTypes.DELETE_AUTHOR:
          remove(_authors, function(author){
            return action.id === author.id;
          });
          AuthorStore.emitChange();
        break;
    default:
      // no actions taken 
  }
});

module.exports = AuthorStore;