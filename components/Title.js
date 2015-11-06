var React = require('react');
var Subtitle = require('./Subtitle');

var Title = React.createClass({
  getInitialState: function() {
    return {
      text: 'A place for React people'
    }
  },
  onClickHandler: function(e) {
    this.setState({text: 'Sorry... there are no Speakers yet'});
  },
  render: function() {
    var title = "ReactConf";
    return (
      <div>
        <h1>{title}</h1>
        <Subtitle text={this.state.text} />
        <div>
          <input type="button" className="btn" onClick={this.onClickHandler} value="Speakers" />
        </div>
      </div>
    );
  }
});

module.exports = Title;