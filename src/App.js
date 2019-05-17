import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Product from './Components/Product'
import './App.css';
// import Carousel from './Components/Carousel';

const App = () => (
  <Router>
    <div className="">
      <Navbar />
      <Switch>
        <main className="">
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Product" component={Product} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Blog" component={Blog} />
        </main>
      </Switch>


    </div>
  </Router>
)



export default App;