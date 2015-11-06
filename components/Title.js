var React = require('react');
var Subtitle = require('./Subtitle');

var Title = React.createClass({
  render: function() {
    var title = "ReactConf";
    var subtitle = "A place for React people";
    return (
      <div>
        <h1>{title}</h1>
        <Subtitle text={subtitle} />
      </div>
    );
  }
});

module.exports = Title;