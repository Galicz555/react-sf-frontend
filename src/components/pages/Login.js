import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import Axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    Axios.post('http://localhost:5000/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        localStorage.setItem('access_token', res.data.accessToken);
        localStorage.setItem('refresh_token', res.data.refreshToken);
      })
      .catch(err => alert('Incorrect Username and/or Password!'));
  }

  render() {
    return (
      <div className="login-dark">
        <form onSubmit={e => this.submit(e)}>
          <h2 className="sr-only">Login Form</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
              onChange={e => this.change(e)}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={e => this.change(e)}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
          <Link className="forgot" to="/main">
            Forgot your email or password?
          </Link>
          <Link className="forgot" to="/register">
            Register
          </Link>
        </form>
      </div>
    );
  }
}
