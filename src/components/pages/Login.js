import { Link } from 'react-router-dom';

import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="login-dark">
        <form method="post">
          <h2 className="sr-only">Login Form</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
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
