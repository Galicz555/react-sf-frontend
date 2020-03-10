import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register-dark">
      <form method="post">
        <h2 className="reg">Create an account</h2>
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
            name="password-repeat"
            placeholder="Password (repeat)"
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
