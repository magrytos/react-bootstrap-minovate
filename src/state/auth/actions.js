import axios from 'axios'
import { BASE_URL } from 'config'

export const LOGIN_REQUEST = 'login/request'
export const LOGIN_SUCCESS = 'login/success'
export const LOGIN_ERROR = 'login/error'
export const LOGOUT_REQUEST = 'logout/request'
export const LOGOUT_SUCCESS = 'logout/success'
export const LOGOUT_ERROR = 'logout/error'

export const login = () => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  })
  axios
    .get(`${BASE_URL}/login`)
    .then(r => {
      dispatch({
        type: LOGIN_SUCCESS,
        update: { user: r.data },
      })
    })
    .catch(err => {
      dispatch({
        type: LOGIN_ERROR,
        update: { error: err.response.data },
      })
    })
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT_REQUEST,
  })
  axios
    .get(`${BASE_URL}/login`)
    .then(r => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch({
        type: LOGOUT_ERROR,
        update: { error: err.response.data },
      })
    })
}
