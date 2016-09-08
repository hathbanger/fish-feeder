var React = require('react');
var PropTypes = React.PropTypes;
var FeedButton = require('./FeedButton');
var styles = {
	background: 'transparent',
	textAlign: 'center'
}

function Splash (props) {
  return (
    <div
      className="jumbotron col-sm-6 text-center col-sm-offset-3"
      style={styles}>
      <h2>{props.fishObj.name}</h2>
      <h3>Feed Count: {props.fishObj.food}</h3>
      <FeedButton />
      <progress className="progress" value={props.fishObj.food} max="1000" aria-describedby="example-caption-2"></progress>
    </div>
  )
}

Splash.propTypes = {
  // fishObj: PropTypes.array.isRequired,
}

module.exports = Splash;
