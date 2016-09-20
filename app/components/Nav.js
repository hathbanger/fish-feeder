var React = require('react');
var Authenticate = require('../containers/AuthenticateContainer');


var Nav = React.createClass({
	render: function() {
		return (
          <div id="navbar" className="">
            <nav className="navbar navbar-light bg-faded">
              <a className="navbar-brand" href="#">Fish Feeder</a>
              <Authenticate />
            </nav>
          </div>    
		)
	}
})

module.exports = Nav;