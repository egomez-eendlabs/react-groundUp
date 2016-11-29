'use strict';

var React = require('react');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  
  render: function(){
    var renderAuthorRow = function(author){
      return (
        <tr key={author.id}>
          <td><a href={'#/authors/' + author.id}>{author.id}</a></td>
          <td>{author.firstName}</td>
          <td>{author.lastName}</td>
        </tr>
      );
    };
    
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(renderAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorList;