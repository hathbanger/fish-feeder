import React, { Component, PropTypes } from 'react'
import Tank from '../components/Tank'

class TankContainer extends Component {

  componentDidMount() {
    console.log('TankContainer has mounted');
  }

  log(payload){
    console.log("fish",payload)
  }

  render() {
    const { dispatch, fish, fetchTankClick, onQuote, all_fish, fetchTank, isAuthenticated, errorMessage } = this.props
    console.log('Cont Props: ', this.props)
    console.log("fish",this.props.fish)

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

