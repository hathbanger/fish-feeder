var React = require('react');
var apiHelper = require('../utils/apiHelper');
var Splash = require('../components/Splash');
// var FeedButton = require('../components/FeedButton');
var styles = {
	background: 'transparent',
	textAlign: 'center'
}


var SplashContainer = React.createClass({
	getInitialState: function(){
		return {
			fishObj: []
		}
	},
	componentDidMount: function(){
		apiHelper.getFishBowl()
			.then(function(info){
				this.setState({
					fishObj: info.data
				})
			}.bind(this));
	},
    handleClick: function() {
    	apiHelper.feed()
    		.then(function(info){
				this.setState({
					fishObj: info.data
				})
			}.bind(this));
    },
	render: function(){
		return (
			<Splash
				fishObj={this.state.fishObj}
				onClick={this.handleClick}
			/>
		)
	}
});

module.exports = SplashContainer;
