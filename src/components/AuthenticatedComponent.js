import React, { Component } from 'react';
import { getJwt } from './helpers/jwt';
import Axios from 'axios';
import {withRouter} from 'react-router-dom';

export default class AuthenticatedComponent extends withRouter(Component){
  constructor(props) {
    super(props);

    this.state = {
      id: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push('/login');
    }

    Axios.get('/getUser/:id', {
      headers: { Autherization: `Bearer ${jwt.accessToken}` }
    })
      .then(res =>
        this.setState({
          id: res.data
        })
      )
      .catch(err => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        console.log(err);
      });
  }

  render() {
    if (this.user.state === undefined) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}
