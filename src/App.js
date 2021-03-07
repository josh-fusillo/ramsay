import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
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

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
