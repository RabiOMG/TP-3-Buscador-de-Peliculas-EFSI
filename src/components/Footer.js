import React from 'react'
import logo from '../images/logo.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand-wrapper">
            <a href="#" className="logo">
              <img src={logo} alt="Filmlane logo" />
            </a>

            <ul className="footer-list">
              <li>
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Peliculas
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Series
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Web Series
                </a>
              </li>
            </ul>
          </div>

          <div className="divider"></div>

          <div className="quicklink-wrapper">
            <ul className="quicklink-list">
              <li>
                <a href="#" className="quicklink-link">
                  Faq
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-link">
                  Centros de Ayuda
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-link">
                  Terminos de uso
                </a>
              </li>

              <li>
                <a href="#" className="quicklink-link">
                  Privacidad
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#"></a>. Todos los Derechos Reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
