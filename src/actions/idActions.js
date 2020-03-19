import { FETCH_ID } from './types';
import { getJwt } from '../components/helpers/jwt';
import Axios from 'axios';

export const fetchId = () => dispatch => {
  const jwt = getJwt();
  if (!jwt) {
    this.props.history.push('/login');
  }

  Axios.get('http://localhost:5000/getId', {
    headers: { Authorization: `Bearer ${jwt.accessToken}` }
  })
    .then(id =>
      dispatch({
        type: FETCH_ID,
        payload: id.data
      })
    )
    .catch(err => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      console.log(err);
    });
};
