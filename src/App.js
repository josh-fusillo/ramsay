import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Contact from './components/contact/contact'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  handleInputChange(e) {
    e.preventDefault();
    

  }
  


  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Header />
      <Switch>
     <Route     
     path="/"
     exact component={Hero}
     />
      <Route     
     path="/about"
     exact component={About}
     />
       <Route     
     path="/contact"
     exact component={Contact}
     />

      </Switch>
      </BrowserRouter>
    </div>
    )
  }
}



