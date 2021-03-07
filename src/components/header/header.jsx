import React, { Component } from "react";
import pupImage from "../assets/mixpup.jpg";import "./header.scss";
import { Link } from 'react-router-dom';
import About from '../about/about'

export default class header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav">
            <ul className="nav__container">
              <li><Link to="/" className="nav__home">HOME</Link></li>
              <li><a href="#" className="nav__product">PRODUCT</a></li>
              <li><a href="#" className="nav__contact">CONTACT</a></li>
              <li><Link to='/about' className="nav__about">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
