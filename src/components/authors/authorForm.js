'use strict';

var React = require('react');

var AuthorForm = React.createClass({
  render: function(){
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text"
          className="form-control"
          placeholder="First Name"
          ref="firstName"
          value="">
        </input>
        <br/>
        
        <label htmlFor="lastName">Last Name</label>
        <input type="text"
          className="form-control"
          placeholder="Last Name"
          ref="lastName"
          value="">
        </input>
        <br/>
        
        <input type="submit" value="save" className="btn btn-default"/>
      </form>
    );
  }
});

module.exports = AuthorForm;