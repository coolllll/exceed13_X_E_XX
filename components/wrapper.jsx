var React = require("react");
var ReactDOM = require("react-dom");

(function() {
  'use strict';

    module.exports = React.createClass({
      render: function() {
        return (
          <div>
            <h1>Hello World</h1>
          </div>
        );
      }
    });

}());

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(<Wrapper/>, document.getElementById("container"));
