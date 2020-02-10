import React from 'react';
import { Link } from 'react-router-dom';

const QuizPage = ()=>(
  <div>
    <h3>QuizPage</h3>
    <Link to="/quiz/1">Quiz 1</Link>
    <Link to="/quiz/2">Quiz 2</Link>
    <Link to="/quiz/3">Quiz 3</Link>
  </div>
);

export default QuizPage;