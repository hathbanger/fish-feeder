import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser, fetchFish, fetchTank, fetchSecretQuote } from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import AllTanks from '../components/AllTanks'

class App extends Component {
  
  render() {
    const { dispatch, all_fish,  isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          <div className='jumbotron'>
            <AllTanks
              onQuoteClick={() => dispatch(fetchTank())}
              isAuthenticated={isAuthenticated}
              all_fish={all_fish}
              dispatch={dispatch}              
            />
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  all_fish: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  
  const { auth, all_fish } = state
  const { isAuthenticated, errorMessage } = auth
  
  return {
    all_fish,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)

