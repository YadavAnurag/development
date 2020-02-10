import React from 'react';
import QuestionCard from './QuestionCard';

const Questions = (props)=>(
  props.questions.map((questionObj, index)=>{
    return (
      <div className="questions">
        <QuestionCard 
          key={index} 
          questionObj={questionObj} 
          index={index}
          answers={props.answers}
          optionChangeHandler={props.optionChangeHandler}
          clearAnswer={props.clearAnswer}
        />
      </div>
    )
  })
);

export default Questions;