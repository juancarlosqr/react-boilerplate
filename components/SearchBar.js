var React = require('react');

var SearchBar = React.createClass({
  propTypes: {
      filterText: React.PropTypes.string.isRequired,
      isAvailableOnly: React.PropTypes.bool.isRequired,
      onInputChange: React.PropTypes.func.isRequired
  },
  handleChange: function () {
    console.info('SearchBar this', this);
    console.log('SearchBar props', this.props);
    console.log('SearchBar refs', this.refs);

    // this.props.filterText = this.refs.filterTextInput.props.value;
    // this.props.isAvailableOnly = this.refs.isAvailableOnlyInput.props.checked;
    this.props.onInputChange(
      this.refs.filterTextInput.props.value,
      this.refs.isAvailableOnlyInput.props.checked
    );
  },
  render: function () {
    console.log('this', this);
    console.log('props', this.props);
    console.log('refs', this.refs);
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
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
  },
  componentDidMount: function () {
    console.log('componentDidMount this', this);
    console.log('componentDidMount props', this.props);
    console.log('componentDidMount refs', this.refs);
  }
});

module.exports = SearchBar;