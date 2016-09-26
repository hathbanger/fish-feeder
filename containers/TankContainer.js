import React, { Component, PropTypes } from 'react'
import Tank from '../components/Tank'

class TankContainer extends Component {

  componentDidMount() {
    // console.log('TankContainer has mounted');
    //0.0.0.0:28080
    var connection = new WebSocket('ws://localhost:28080');
    console.log('websocket', connection)
  }

  render() {
    const { dispatch, fish, fetchTankClick, onQuote, all_fish, fetchTank, isAuthenticated, errorMessage } = this.props


    return (
      <div>
        <Tank 
          fetchTankClick={() => dispatch(fetchTankClick(this.props.fish))} 
          fish={fish}
          all_fish={all_fish}
          />
      </div>
    )
  }
}

export default TankContainer

