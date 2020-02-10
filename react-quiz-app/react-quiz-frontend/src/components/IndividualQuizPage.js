import React from 'react';
import QuizApp from './QuizApp';


const IndividualQuizPage = (props)=>(
  <div>
    <h3>IndividualQuizPage {props.match.params.id}</h3>
    <QuizApp />
  </div>
);

export default IndividualQuizPage;