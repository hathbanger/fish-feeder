var React = require('react');
var Authenticate = require('../components/Authenticate');

var AuthenticateContainer = React.createClass({
	getInitialState: function(){
		return {
			email: '',
			password: ''
		}
	},
	updateEmail(){
		this.setState({
			email: this.refs.login_email.value
		})
	},

	updatePassword: function(){
		this.setState({
			password: this.refs.login_password.value
		})
	},	
	componentDidMount: function(){
		console.log(this.state);
	},
	handleClick: function(){
		console.log('form submission!');
	},
	render: function(){
		return(
			<Authenticate 
				onClick={this.handleClick}
			/>
		)
	}
});	

module.exports = AuthenticateContainer;