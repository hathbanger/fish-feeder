var React = require('react');

var FeedButton = React.createClass({
	render: function(){
		return(
			<div>
				<button className='btn btn-lg btn-success'>Feed</button>
			</div>
		)
	}
});

module.exports = FeedButton;