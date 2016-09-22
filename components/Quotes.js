import React, { Component, PropTypes } from 'react'

export default class Quotes extends Component {
  
  render() {
    const { onQuoteClick, onSecretQuoteClick, isAuthenticated, all_fish, quote } = this.props
    console.log("all_fish", all_fish.fish)
    return (
      <div className='clearfix'>
        <div className='col-sm-12'>
          { quote &&
            <div>
              <h1 className="display-3">{quote.name}</h1>
            </div>
          }
        </div>      
        <div className='col-md-12 text-center'>
          <button onClick={onQuoteClick} className="btn btn-primary btn-lg">
            Get Fish
          </button>
        </div>

      </div>
    )
  }
}

Quotes.propTypes = {
  onQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  quote: PropTypes.object,
  isSecretQuote: PropTypes.bool.isRequired
 }