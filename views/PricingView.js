var React = require('react');
var PriceTable = require('../components/PriceTable');

var SECTIONS = [
  {price: '$0.00', available: true, name: 'Streaming'},
  {price: '$29.99', available: false, name: 'Silver'},
  {price: '$49.99', available: false, name: 'Golden'},
  {price: '$89.99', available: true, name: 'Platinum'}
];
var PricingView = React.createClass({
  render: function() {
    return (
      <section>
        <PriceTable sections={SECTIONS} />
      </section>
    );
  }
});

module.exports = PricingView;