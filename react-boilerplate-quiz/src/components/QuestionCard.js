import React from 'react';
import Options from './Options';
import Question from './Question';

const QuestionCard = (props)=>(
  <div>
    <Question questionText={props.questionObj.question} index={props.index} />
    <Options 
      options={props.questionObj.options} 
      questionId={props.questionObj.id} 
      userChoseOptionId={props.answers[props.questionObj.id]}
      optionChangeHandler={props.optionChangeHandler}
    />
    <button onClick={()=>{props.clearAnswer(props.questionObj.id);}}>Clear</button>
  </div>
);

export default QuestionCard;