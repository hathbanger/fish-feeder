var React = require('react');
var PropTypes = React.PropTypes;
var FeedButton = require('./FeedButton');
var styles = {
	background: 'transparent',
	textAlign: 'center'
}

// where: <button className='btn btn-lg btn-success' onClick={props.onClick}>Feed</button>
// should implement the 'FeedButton'

function Splash (props) {
  return (
    <div
      className="jumbotron col-sm-6 text-center col-sm-offset-3"
      style={styles}>
      <h2 className="display-3">{props.fishObj.name}</h2>
      <h3 className="display-4">Feed Count: {props.fishObj.food}</h3>
			<button className='btn btn-success' onClick={props.onClick}>Feed</button>
    </div>
  )
}

Splash.propTypes = {
  // fishObj: PropTypes.array.isRequired,
}

module.exports = Splash;
