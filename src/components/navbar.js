import React from 'react';

export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img
            src="https://images5.alphacoders.com/587/thumb-1920-587597.jpg"
            width="30"
            height="30"
            alt="not found"
          />
        </a>
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
              <a class="nav-link">
                Dungeon<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Csapat
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                Hajó
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Extrák
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item">
                  Aranyköpések
                </a>
                <a class="dropdown-item">
                  Képek
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item">
                  Kontakt
                </a>
              </div>
            </li>
          </ul>
          <a class="nav-item log">
            Kilépés
          </a>
        </div>
      </nav>
    </div>
  );
}
