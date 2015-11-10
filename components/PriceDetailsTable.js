var React = require('react');

var SectionRow = React.createClass({
  render: function () {
    return (
      <tr className={this.props.section.available ? '': 'sold-out'}>
        <td>{this.props.section.name}</td>
        <td>{this.props.section.price}</td>
      </tr>
    );
  }
});

var PriceDetailsTable = React.createClass({
  propTypes: {
      filterText: React.PropTypes.string.isRequired,
      isAvailableOnly: React.PropTypes.bool.isRequired,
      sections: React.PropTypes.array.isRequired
  },
  render: function () {
    var rows = [];
    this.props.sections.forEach(function(section) {
      if (section.name.indexOf(this.props.filterText) === -1 || (!section.available && this.props.isAvailableOnly)) {
        return;
      }
      rows.push(<SectionRow section={section} key={section.name} />);
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

module.exports = PriceDetailsTable;
