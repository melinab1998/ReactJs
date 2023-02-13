import React from 'react'
import logo from '../../img/logo.png'
import clases from '../../styles.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary nav font">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} className="nav__logo"/>
      <h3 className="nav__titulo">PaperWorld</h3>
    </a>
    <div className="collapse navbar-collapse nav__list" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link nav__items" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav__items" href="#">Librería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav__items" href="#">Papelería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav__items" href="#">Juguetería</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav__items" href="#">Marroquinería</a>
        </li>
      </ul>
    </div>
    <div>
    <CartWidget/>
    </div>
  </div>
</nav>
)
}

export default NavBar
