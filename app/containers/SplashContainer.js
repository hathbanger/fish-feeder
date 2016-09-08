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
			.then(function(fish){
				this.setState({
					fishObj: fish.data.fish
				})
			}.bind(this));
	},
    handleClick: function() {
    	apiHelper.feed()
    		.then(function(info){
				this.setState({
					fishObj: info.data.fish
				})
			}.bind(this));
    },
	render: function(){
		return (
			<Splash
				fishObj={this.state.fishObj}
			/>
		)
	}
});

module.exports = SplashContainer;
