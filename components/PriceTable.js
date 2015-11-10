var React = require('react');
var SearchBar = require('./SearchBar');
var PriceDetailsTable = require('./PriceDetailsTable');

var PriceTable = React.createClass({
  getInitialState: function () {
    return {
      filterText: '',
      isAvailableOnly: false
    };
  },
  handleInputChange: function(filterText, isAvailableOnly) {
    this.setState({
      filterText: filterText,
      isAvailableOnly: isAvailableOnly
    });
  },
  render: function () {
    return (
      <section>
        <h3>Prices</h3>
        <SearchBar
          filterText={this.state.filterText}
          isAvailableOnly={this.state.isAvailableOnly}
          onInputChange={this.handleInputChange} />
        <PriceDetailsTable 
          filterText={this.state.filterText}
          isAvailableOnly={this.state.isAvailableOnly}
          sections={this.props.sections} />
      </section>
    );
  }
});

module.exports = PriceTable;