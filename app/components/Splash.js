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
      <h2>{props.fishObj.name}</h2>
      <h3>Feed Count: {props.fishObj.food}</h3>
			<button className='btn btn-lg btn-success' onClick={props.onClick}>Feed</button>
      <progress className="progress" value={props.fishObj.food} max="1000" aria-describedby="example-caption-2"></progress>
    </div>
  )
}

Splash.propTypes = {
  // fishObj: PropTypes.array.isRequired,
}

module.exports = Splash;
