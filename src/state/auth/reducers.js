import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './actions'

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null }
    }
    case LOGIN_SUCCESS: {
      return { ...state, user: action.update.user, isLoading: false, error: null }
    }
    case LOGIN_ERROR: {
      return { ...state, error: action.update.error, isLoading: false }
    }
    case LOGOUT_REQUEST: {
      return { ...state, isLoading: true, error: null }
    }
    case LOGOUT_SUCCESS: {
      return { ...state, user: null, isLoading: false, error: null }
    }
    case LOGOUT_ERROR: {
      return { ...state, error: action.update.error, isLoading: false }
    }
    default:
      return state
  }
}
