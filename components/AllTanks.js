import React, { Component, PropTypes } from 'react'

export default class AllTanks extends Component {
  
  render() {
    const { onQuoteClick, isAuthenticated, all_fish, quote } = this.props
    let fishGroup = all_fish.all_fish.fish

    return (
      <div className='clearfix'>
        <div className='col-sm-12'>
          { fishGroup &&
            <div>

              { (()=>fishGroup.map(function(fish) {
                return (
                  <div className="col-md-4">
                    <div key={fish.id} className="card">
                      <img className="card-img-top" src="http://petus.imageg.net/PETNA_36/pimg/pPETNA-4032756_main_r200.jpg" alt="Card image cap"/>
                      <div className="card-block">
                        <h4 className="card-title">{fish.name}</h4>
                        <p className="card-text">{fish.feed}</p>
                        <a href="#" onClick={onQuoteClick} className="btn btn-primary">Get data for {fish.name}</a>
                      </div>
                    </div>                    
                  </div>
                )
              }))() }           
            
            </div>
          }
        </div>      
      </div>
    )
  }
}

AllTanks.propTypes = {
  onQuoteClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  all_fish: PropTypes.object
 }