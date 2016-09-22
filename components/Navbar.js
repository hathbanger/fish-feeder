import React, { Component, PropTypes } from 'react'
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../actions'

export default class Navbar extends Component {
  
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    
    return (
      <nav className='navbar navbar-light bg-faded'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Fish Feeder</a>
           <div className='navbar-form form-inline pull-xs-right'>
           
           {!isAuthenticated &&
             <Login
               errorMessage={errorMessage}
               onLoginClick={ creds => dispatch(loginUser(creds)) }
             />
           }
           
           {isAuthenticated &&
             <Logout onLogoutClick={() => dispatch(logoutUser())} />
           }
         
         </div>
       </div>
     </nav>
    )
  }

}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}