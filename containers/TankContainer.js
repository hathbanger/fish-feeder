import React, { Component, PropTypes } from 'react'
import { loginUser, fetchFish, fetchTank, fetchSecretQuote } from '../actions'
import Tank from '../components/Tank'

class TankContainer extends Component {
  
  componentDidMount() {
    console.log('TankContainer has mounted');
  }

  render() {
    const {  dispatch, fish, all_fish,  isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Tank onclick={() => dispatch(fetchTank())} fish={fish} />
      </div>
    )
  }
}

export default TankContainer

