import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Contact from './components/contact/contact';
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
     path="/ramsay/"
     exact component={Hero}
     />
      <Route     
     path="/about/"
     component={About}
     />
       <Route     
     path="/contact/"
     component={Contact}
     />

      </Switch>
      </BrowserRouter>
    </div>
    )
  }
}



