import React, { Component, PropTypes } from 'react'
import TankContainer from '../containers/TankContainer'

export default class AllTanks extends Component {
  
  render() {
    const { dispatch, onQuoteClick, isAuthenticated, all_fish, quote } = this.props
    let fishGroup = all_fish.all_fish.fish

    return (
      <div className='clearfix'>
        <div className='col-sm-12'>
          { fishGroup &&
            <div>
              { (()=>fishGroup.map(function(fish) {
                return <TankContainer onQuoteClick={onQuoteClick} key={fish.id} fish={fish} />
              }))() }           
            </div>

          }        
        </div>
      </div> 
    )
  }
}

AllTanks.propTypes = {
  fish: PropTypes.object,
  onQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  all_fish: PropTypes.object
 }