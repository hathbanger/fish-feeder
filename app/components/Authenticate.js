var React = require('react')

function Authenticate(props) {
  	return (
			<div>
              <form className="form-inline pull-xs-right">
                <input className="form-control" type="text" placeholder="Email"/>
                <input className="form-control" type="text" placeholder="Password"/>
                <button className="btn btn-outline-success" onClick={props.onClick}>Login</button>
              </form>				
			</div>
  	)

}

module.exports = Authenticate;