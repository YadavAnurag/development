import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const HomePage = ()=>(
  <div>
    <h1>Welcome..</h1>
    <p>This is my site. Take a look around</p>
  </div>
);
const PortfolioPage = ()=>(
  <div>
    <h1>My work</h1>
    <p>Checkout the stuffs I've done</p>
    <Link to="/portfolio/1" >Item One</Link>
    <Link to="/portfolio/2" >Item Two</Link>
    <Link to="/portfolio/3" >Item Three</Link>
  </div>
);
const PortfolioItemPage = (props)=>(
  <div>
    <h1>A thing I've done</h1>
    <p>This is page is for the item with the id {props.match.params.id}</p>
  </div>
);
const ContactPage = ()=>(
  <div>
    <h1>Contact Me</h1>
    <p>You can reach me at anu@gmail.com</p>
  </div>
);

const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItemPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;