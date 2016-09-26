import React, { Component, PropTypes } from 'react'
export default class Tank extends Component {

  render() {
    const { fish, all_fish, fetchTankClick, test, onQuote } = this.props
    
    return (
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="http://petus.imageg.net/PETNA_36/pimg/pPETNA-4032756_main_r200.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h2 className="card-title">{this.props.fish.name}</h2>
              <p className="card-text">Food: {this.props.fish.food}</p>
              <div onClick={fetchTankClick} className="btn  btn-block btn-primary">Feed {this.props.fish.name}</div>
            </div>
          </div>                    
        </div>
    )
  }
}
Tank.propTypes = {
  fish: PropTypes.object
 }