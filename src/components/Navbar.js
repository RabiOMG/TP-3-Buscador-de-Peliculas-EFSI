import React, { useRef, useEffect } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const header = useRef(null)
  const button = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', function () {
      window.scrollY >= 10
        ? header.current.classList.add('active')
        : header.current.classList.remove('active')
    })
    window.addEventListener('scroll', function () {
      window.scrollY >= 500
        ? button.current.classList.add('active')
        : button.current.classList.remove('active')
    })
  }, [])
  return (
    <header className="header" data-header ref={header}>
      <div className="container">
        <div className="overlay" data-overlay></div>

        <Link to="/" className="logo">
          <img src={logo} alt="Filmlane logo" />
        </Link>

        <div className="header-actions">
          <button className="search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <div className="lang-wrapper">
            <label htmlFor="language">
              <ion-icon name="globe-outline"></ion-icon>
            </label>

            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="au">AU</option>
              <option value="ar">AR</option>
              <option value="tu">TU</option>
            </select>
          </div>

          <button className="btn btn-primary">Iniciar Sesion</button>
        </div>

        <button className="menu-open-btn" data-menu-open-btn>
          <ion-icon name="reorder-two"></ion-icon>
        </button>

        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <Link to="/" className="logo">
              <img src={logo} alt="Filmlane logo" />
            </Link>

            <button className="menu-close-btn" data-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="navbar-social-list">
            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="navbar-social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <a href="#top" className="go-top" data-go-top ref={button}>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </header>
  )
}
