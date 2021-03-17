import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Products from "./components/products/products";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/ramsay/" exact component={Hero} />
            <Route path="/products/" component={Products} />
            <Route path="/contact/" component={Contact} />
            <Route path="/about/" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
