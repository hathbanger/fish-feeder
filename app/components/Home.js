var React = require('react');
var Splash = require('../containers/Splash');


var Home = React.createClass({
	render: function() {
		return (
			<div>
				<Splash />
			</div>
		)
	}
});

module.exports = Home;