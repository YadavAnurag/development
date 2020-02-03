import React from 'react';

const Status = (props)=>{
  const answersLength = Object.keys(props.answers).length;

  return (
    <div>
      <div>
      {
        answersLength === props.questions.length ?
        <p>Every question has been answered</p>:
        <p>You have answered {answersLength}/{props.questions.length}</p>
      }
      </div>
      <div>
        {
          props.questions.map((question, index)=>{
            return (
              <div key={index}>
              {
                props.answers[question.id] !== undefined ?
                <button>{index + 1} answered</button> :
                <button>{index + 1} unasnwered</button>
              }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Status;