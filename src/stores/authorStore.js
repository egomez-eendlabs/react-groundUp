'use strict';

var Dispatcher = require('../Dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

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
  switch (action.actionTypes) {
    case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author);
        AuthorStore.emitChange();
      break;
    default:
      
  }
});

module.exports = AuthorStore;