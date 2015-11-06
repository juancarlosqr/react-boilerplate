var React = require('react');

var Register = React.createClass({
  getInitialState: function () {
    return {
      count: 57,
      registered: false
    }
  },
  clickHandler: function(e) {
    e.preventDefault();
    if (this.state.registered) {
      alert('Sorry...! You are already registered');
    } else {
      this.setState({
        count: this.state.count + 1,
        registered: true
      });
      setTimeout(function () {
        alert('Great! Now you are registered');
      }, 1);
    }
  },
  render: function() {
    var url = "http://facebook.github.io/react";
    return (
      <section>
        <p>
          <a href={url} className="btn" target="_blank" onClick={this.clickHandler}>Register</a>
        </p>
        <p>We have {this.state.count} people register so far. That&apos;s great!</p>
      </section>
    );
  }
});

module.exports = Register;