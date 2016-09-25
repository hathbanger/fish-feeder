import { combineReducers } from 'redux'
import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE
} from './actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        all_fish: action.all_fish,
        errorMessage: ''
      })
    case LOGIN_FAILURE:

      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
    }
}

// The quotes reducer
function quotes(state = {
    isFetching: false,
    all_fish: {},
    quote: '',
    authenticated: false
  }, action) {
  switch (action.type) {
    case QUOTE_REQUEST:
      console.log('action: request:', action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case QUOTE_SUCCESS:
      console.log('action: success:', action.response)
      return Object.assign({}, state, {
        isFetching: false,
        all_fish: action.reponse,
        authenticated: action.authenticated || false
      })
    case QUOTE_FAILURE:
      console.log('action: failure:', action)
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'failed! '
      })
    default:
      return state
  }
}
// The quotes reducer
function all_fish(state = {
    isFetching: false,
    all_fish: {},
    authenticated: false
  }, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        all_fish: action.all_fish,
        errorMessage: ''
      })
    default:
      return state
  }
}
// We combine the reducers here so that they
// can be left split apart above
const fishFeederApp = combineReducers({
  auth,
  quotes,
  all_fish
})

export default fishFeederApp