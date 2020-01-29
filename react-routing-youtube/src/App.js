import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './Nav'
impo
import Shop from './Shop'rt About from './About'
import ItemDetail from './ItemDetail'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/shop/:id' component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Home = ()=>{
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}