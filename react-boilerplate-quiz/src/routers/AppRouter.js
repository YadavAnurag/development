import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={QuizDashboardPage} exact={true} />
        <Route path="/quiz" component={QuizPage} exact={true} />
        <Route path="/quiz/:id" component={} />
      </Switch>
    </div>
  </BrowserRouter>
);
