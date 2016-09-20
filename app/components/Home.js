var React = require('react');
var Nav = require('./Nav');
var SplashContainer = require('../containers/SplashContainer');


var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Nav />
				<SplashContainer />
			</div>
		)
	}
});

module.exports = Home;
