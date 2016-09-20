var React = require('react');
var SplashContainer = require('../containers/SplashContainer');


var Home = React.createClass({
	render: function() {
		return (
			<div>
				<SplashContainer />
			</div>
		)
	}
});

module.exports = Home;
