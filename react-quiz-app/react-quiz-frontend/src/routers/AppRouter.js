import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from '../components/AboutPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import IndividualQuizPage from '../components/IndividualQuizPage';
import NotFoundPage from '../components/NotFoundPage';
import QuizDashboardPage from '../components/QuizDashboardPage';
import QuizPage from '../components/QuizPage';

const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={QuizDashboardPage} exact={true} />
        <Route path="/quiz" component={QuizPage} exact={true} />
        <Route path="/quiz/:id" component={IndividualQuizPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;