import React, { Component } from "react";
import "./header.scss";
import { Link } from 'react-router-dom';


export default class header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <ul className="nav__container">
              <li><Link to="/ramsay" className="nav__home nav__button">HOME</Link></li>
              <li><a href="#" className="nav__product nav__button">PRODUCT</a></li>
              <li><Link to="/contact" className="nav__contact nav__button">CONTACT</Link></li>
              <li><Link to='/about' className="nav__about nav__button">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
