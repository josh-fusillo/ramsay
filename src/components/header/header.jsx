import React, { Component } from "react";
import "./header.scss";
import { Link } from 'react-router-dom';
import image from '../assets/heropup.jpg';


export default class header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <ul className="nav__container">
              <li><Link to="/ramsay/"><img src={image} className="nav__image" /></Link></li>
              <div className="nav__container-two">
              <li><Link to="/ramsay/" className="nav__home nav__button">HOME</Link></li>
              <li><Link to="/products/" className="nav__product nav__button">PRODUCTS</Link></li>
              <li><Link to="/contact/" className="nav__contact nav__button">CONTACT</Link></li>
              <li><Link to='/about/' className="nav__about nav__button">ABOUT</Link></li>
              </div>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
