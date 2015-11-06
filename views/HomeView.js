var React = require('react');
var Title = require('../components/Title');
var Register = require('../components/Register');

var HomeView = React.createClass({
  render: function() {
    return (
      <section>
        <Title />
        <Register />
      </section>
    );
  }
});

module.exports = HomeView;