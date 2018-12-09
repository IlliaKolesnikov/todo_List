import axios from 'axios';
import jwtDecode from 'jwt-decode';

const API_URL = 'http://ec2-54-88-87-181.compute-1.amazonaws.com:4000';

export function signIn(userName, userPassword, history) {
  return dispatch => {
    axios.post(`${API_URL}/login`, {
      email: userName,
      password: userPassword
    })
      .then(json => {
        localStorage.setItem('token', json.data.user.token)
        const decoded = jwtDecode(json.data.user.token)
        localStorage.setItem('userId', json.data.user.id)
        localStorage.setItem('mail', decoded.email)
        dispatch({ type: 'AUTH_SUCCESS' })
        history.push('/home')
      })
      .catch(error => {
        console.log(error.response)
        dispatch({ type: 'ERROR_FOUND', payload: error.response.data.errors })
      })

  }
}

export function signOut() {
  return dispatch => {
    localStorage.setItem('token', '')
    localStorage.setItem('mail', '')
    localStorage.setItem('user', '')
    dispatch({ type: 'LOG_OUT' })
    // history.push('/home')
  }
}

export function signUp(userMail, userPassword, userName, history) {
  return dispatch => {
    axios.post(`${API_URL}/register`, {
      email: userMail,
      password: userPassword,
      username: userName
    })
      .then(() => {
        dispatch(signIn(userMail, userPassword, history))
      })
      .catch(error => {
        dispatch({ type: 'ERROR_FOUND', payload: error.response.data.error })
      })
  }
}
