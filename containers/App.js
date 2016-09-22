import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser, fetchFish, fetchSecretQuote } from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Quotes from '../components/Quotes'

class App extends Component {
  
  render() {
    const { dispatch, quote, all_fish, isAuthenticated, errorMessage, isSecretQuote } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
        <div className='jumbotron'>
          <Quotes
            onQuoteClick={() => dispatch(fetchFish())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={isAuthenticated}
            quote={quote}
            all_fish={all_fish}
            isSecretQuote={isSecretQuote}
          />
          
        </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.object,
  all_fish: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  
  const { quotes, auth, all_fish } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth
  
  return {
    quote,
    all_fish,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)

