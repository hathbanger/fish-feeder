import React, { Component, PropTypes } from 'react'
import TankContainer from '../containers/TankContainer'

export default class AllTanks extends Component {
  
  render() {
    const { dispatch, fetchTankClick, isAuthenticated, all_fish, quote } = this.props
    let fishGroup = all_fish.all_fish.fish

    return (
        <div className='container'>
          <div className='jumbotron'>
            <div className='clearfix'>
              <div className='col-sm-12'>
                { fishGroup &&
                  <div>
                    { (()=>fishGroup.map(function(fish) {
                      return  <TankContainer 
                                dispatch={dispatch} 
                                fetchTankClick={fetchTankClick} 
                                key={fish.id} 
                                fish={fish}
                                all_fish={all_fish}
                              />
                    }))() }           
                  </div>

                }        
              </div>
            </div> 
        </div>
      </div>
    )
  }
}

AllTanks.propTypes = {
  fish: PropTypes.object,
  fetchTankClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  all_fish: PropTypes.object
 }

 