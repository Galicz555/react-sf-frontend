import React from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';
import battleship from '../../assets/images/battleship.jpg'

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
    >
      <Link className="navbar-brand" to="/">
        <img
          src={battleship}
          width="30"
          height="30"
          alt="not found"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/space/main">
              Dungeon<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/space/team">
              Csapat
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/space/ship">
              Hajó
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Extrák
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/space/oneliners">
                Aranyköpések
              </Link>
              <Link className="dropdown-item" to="/space/pictures">
                Képek
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/space/about">
                Kontakt
              </Link>
            </div>
          </li>
        </ul>
        <Link className="nav-item log" to="/">
          Kilépés
        </Link>
      </div>
    </nav>
  );
}
