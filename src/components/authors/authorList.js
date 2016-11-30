'use strict';

var React = require('react');
var Link = require('react-router').Link;

var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
  propTypes: {
    authors: React.PropTypes.array.isRequired
  },
  
  deleteAuthor: function(id, event){
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted!');
  },
  
  render: function(){
    var renderAuthorRow = function(author){
      return (
        <tr key={author.id}>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>
            delete</a></td>
          <td><Link to={'author/'+author.id }>{author.id}</Link></td>
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
              <td></td>
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