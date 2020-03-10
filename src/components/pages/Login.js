import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    // <div>
    //   <nav class="navbar navbar-expand-sm fixed-top nav">
    //     <h1 class="navbar-text">Halhatatlan Farkasok</h1>
    //     <li class="navbar-nav ml-auto">
    //       <Link type="button" class="nav-link" to="/register">
    //         Sign up
    //       </Link>
    //     </li>
    //   </nav>
    //   <main class="my-form loginPage">
    //     <div class="row justify-content-center">
    //       <div class="card">
    //         <h1 class="card-header text-center">Login</h1>
    //         <form name="my-form">
    //           <div class="form-group col-sm-10">
    //             <input
    //               class="form-control"
    //               placeholder="Username"
    //               name="username"
    //             />
    //             >
    //           </div>
    //           <div class="form-group col-sm-10">
    //             <input
    //               type="password"
    //               class="form-control"
    //               placeholder="Password"
    //               name="password"
    //             />
    //             >
    //           </div>
    //           <div class="form-group buttons col-sm-10">
    //             <Link class="nav-link" to="/register">
    //               Sign up
    //             </Link>
    //             <button onClick="submit()" class="btn btn-primary">
    //               Login
    //             </button>
    //           </div>
    //           <div class="form-group col-sm-10 bottomMessage" role="alert">
    //             <p class="alert-heading"></p>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </main>
    // </div>
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
