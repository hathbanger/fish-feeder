import React, { Component, PropTypes } from 'react'
export default class Tank extends Component {
  render() {
    const { fish, onQuoteClick } = this.props
    return (
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src="http://petus.imageg.net/PETNA_36/pimg/pPETNA-4032756_main_r200.jpg" alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title">{this.props.fish.name}</h4>
              <p className="card-text">Food: {this.props.fish.food}</p>
              <a onQuoteClick={onQuoteClick} className="btn btn-primary">Get data for {this.props.fish.name}</a>
            </div>
          </div>                    
        </div>
    )
  }
}
Tank.propTypes = {
  fish: PropTypes.object
 }