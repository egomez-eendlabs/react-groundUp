'use strict';

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave:React.PropTypes.func.isRequired,
    onChange:React.PropTypes.func.isRequired,
    errors:React.PropTypes.object
  },
  
  render: function(){
    return (
      <form>
        <TextInput
          label="First Name"
          name="firstName"
          value={this.props.author.firstName}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
          />
      
        <TextInput
            label="Last Name"
            name="lastName"
            value={this.props.author.lastName}
            onChange={this.props.onChange}
            error={this.props.errors.lastName}
            />
        
        <input type="submit" value="save" className="btn btn-default" 
          onClick={this.props.onSave}/>
      </form>
    );
  }
});

module.exports = AuthorForm;