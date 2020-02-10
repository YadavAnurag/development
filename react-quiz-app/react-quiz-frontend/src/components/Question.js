import React from 'react';

const Question = (props)=>(
  <div> {props.index+1}. {props.questionText}</div>
);

export default Question;