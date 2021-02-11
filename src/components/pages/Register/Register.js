import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './Register.sass';

export default class Register extends Component {
  render() {
    return (
      <div className="register-dark">
        <form className="regForm" method="post">
          <h2 className="reg">Create an account</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
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
            <input
              className="form-control"
              type="password"
              name="confirmPsw"
              placeholder="Password (repeat)"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="dateOfBirth"
              placeholder="Date of birth"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </div>
          <Link className="forgot" to="/login">
            You already have an account? Login here.
          </Link>
        </form>
      </div>
    );
  }
}
