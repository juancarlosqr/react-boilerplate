var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var HomeView = require('./views/HomeView');
var AboutView = require('./views/AboutView');
var PricingView = require('./views/PricingView');

var RootView = React.createClass({
  render: function() {
    return (
      <div>
        <h1>ReactConf</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="pricing">Pricing</Link></li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={RootView}>
    <DefaultRoute handler={HomeView}/>
    <Route name="about" handler={AboutView}/>
    <Route name="pricing" handler={PricingView}/>
  </Route>
);

Router.run(routes, function (Root) {
  React.render(<Root />, document.getElementById('mount'));
});