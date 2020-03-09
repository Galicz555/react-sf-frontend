import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <Link class="navbar-brand" to="/">
          <img
            src="https://images5.alphacoders.com/587/thumb-1920-587597.jpg"
            width="30"
            height="30"
            alt="not found"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Dungeon<span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Csapat
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Hajó
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Extrák
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/">
                  Aranyköpések
                </Link>
                <Link class="dropdown-item" to="/">
                  Képek
                </Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/about">
                  Kontakt
                </Link>
              </div>
            </li>
          </ul>
          <Link class="nav-item log" to="/">
            Kilépés
          </Link>
        </div>
      </nav>
    </div>
  );
}