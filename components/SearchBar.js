var React = require('react');

var SearchBar = React.createClass({
  propTypes: {
      filterText: React.PropTypes.string.isRequired,
      isAvailableOnly: React.PropTypes.bool.isRequired,
      onInputChange: React.PropTypes.func.isRequired
  },
  handleChange: function () {
    this.props.onInputChange(
      this.refs["filterTextInput"].getDOMNode().value,
      this.refs["isAvailableOnlyInput"].getDOMNode().checked
    );
  },
  render: function () {
    return (
      <form>
        <input
          type="text"
          placeholder="Search by Section name..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
        <p>
          <input
            type="checkbox"
            checked={this.props.isAvailableOnly}
            ref="isAvailableOnlyInput"
            onChange={this.handleChange} />
          {' '}
          Only show available sections
        </p>
      </form>
    );
  }
});

module.exports = SearchBar;