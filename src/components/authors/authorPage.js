'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');


var AuthorPage = React.createClass({
  getInitialState: function(){
    return {
      authors: []
    };
  },
  
  componentWillMount: function(){
    console.log('adf');
    this.setState({ authors: AuthorApi.getAllAuthors()});
  },
  
  render: function(){
    var renderAuthorRow = function(author){
      return (
        <tr key={author.id}>
          <td><a href={"#/authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName}</td>
          <td>{author.lastName}</td>
        </tr>
      );
    };
    
    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.authors.map(renderAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = AuthorPage;