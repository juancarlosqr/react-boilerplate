var React = require('react');

var Register = React.createClass({
  clickHandler: function() {
    alert('Great! Now you are registered');
  },
  render: function() {
    var url = "http://facebook.github.io/react";
    return (
      <p>
        <a href={url} className="btn" target="_blank" onClick={this.clickHandler}>Register</a>
      </p>
    );
  }
});

module.exports = Register;