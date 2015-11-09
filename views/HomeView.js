var React = require('react');
var Title = require('../components/Title');
var Register = require('../components/Register');
var PriceTable = require('../components/PriceTable');

var SECTIONS = [
  {price: '$0.00', available: true, name: 'Streaming'},
  {price: '$29.99', available: false, name: 'Silver'},
  {price: '$49.99', available: true, name: 'Golden'},
  {price: '$89.99', available: true, name: 'Platinum'}
];
var HomeView = React.createClass({
  render: function() {
    return (
      <section>
        <Title />
        <Register />
        <PriceTable sections={SECTIONS} />
      </section>
    );
  }
});

module.exports = HomeView;