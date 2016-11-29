'use strict';

var React = require('react');

var AboutPage = React.createClass({
  render: function(){
    return(
        <div>
          <h1>About</h1>
            <span>This application uses the following technologies:</span>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>Flux</li>
              <li>XX</li>
              <li>Gulp</li>
              <li>Browserify</li>
              <li>Bootstrap</li>
            </ul>
        </div>
    );
  }
});

module.exports = AboutPage;