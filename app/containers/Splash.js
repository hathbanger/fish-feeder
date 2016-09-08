var React = require('react');
var apiHelper = require('../utils/apiHelper');
var FeedButton = require('./FeedButton');
var styles = {
	background: 'transparent',
	textAlign: 'center'
}


var Splash = React.createClass({
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
			<div 
				className="jumbotron col-sm-6 text-center col-sm-offset-3"
				style={styles}>
				<img src={this.state.fishObj.picture} />
				<h2>{this.state.fishObj.name}</h2>
				<h3>Feed Count: {this.state.fishObj.feed}</h3>
				<button  onClick={this.handleClick} className="btn btn-lg btn-warning">feed</button>
				<progress className="progress" value={this.state.fishObj.feed} max="1000" aria-describedby="example-caption-2"></progress>
			</div>
		)
	}
});

module.exports = Splash;