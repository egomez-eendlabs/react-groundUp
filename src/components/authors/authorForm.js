'use strict';

var React = require('react');
var TextInput = require('../common/textInput')

var AuthorForm = React.createClass({
  render: function(){
    return (
      <form>
        <TextInput
          label="First Name"
          name="firstName"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          />
      
        <TextInput
            label="Last Name"
            name="lastName"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            />
        
        <input type="submit" value="save" className="btn btn-default"/>
      </form>
    );
  }
});

module.exports = AuthorForm;