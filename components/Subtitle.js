var React = require('react');

var Subtitle = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
});

module.exports = Subtitle;