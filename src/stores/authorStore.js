'use strict';

var Dispatcher = require('./Dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_ENVENT = 'change';

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChageListener: function(callback){
    this.on(CHANGE_ENVENT, callback);
  },
  
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_ENVENT, callback);
  },
  
  emitChange: function(){
    this.emit(CHANGE_ENVENT);
  }
});

Dispatcher.register(function(action){
  
});

module.exports = AuthorStore;