var React = require('react');

var SectionRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.section.name}</td>
        <td>{this.props.section.price}</td>
      </tr>
    );
  }
});

var PriceDetailsTable = React.createClass({
  render: function () {
    var rows = [];
    // var lastCategory = null;
    this.props.sections.forEach(function(section) {
        // if (section.name.indexOf(this.props.filterText) === -1 || (!section.available && this.props.isAvailableOnly)) {
        if (section.name.indexOf(this.props.filterText) === -1) {
          return;
        }
        rows.push(<SectionRow section={section} key={section.name} />);
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>
              Section
            </th>
            <th>
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = PriceDetailsTable;
