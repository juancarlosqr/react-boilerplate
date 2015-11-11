var React = require('react');

var AboutView = React.createClass({
  render: function () {
    return (
      <section>
        <h2>About</h2>
        <p>React is javascript library developed by Facebook and Instagram</p>
        <p className="highlight">ReactConf is the place to talk about ReactJS</p>
      </section>
    );
  }
});

module.exports = AboutView;