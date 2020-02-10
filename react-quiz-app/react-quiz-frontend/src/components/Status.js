import React from 'react';
import { Link } from 'react-router-dom';

const Status = (props)=>{
  const answersLength = Object.keys(props.answers).length;

  return (
    <div className="status">
      <div className="status__text-div">
      {
        answersLength === props.questions.length && props.questions.length !== 0 ?
        <p className="status__answer-status">Every question has been answered</p>:
        props.questions.length !== 0 && <p className="status__answer-status">You have answered {answersLength}/{props.questions.length}</p>
      }
      </div>
      <div className="status__button-div">
        {
          props.questions.map((question, index)=>{
            return (
              <div key={index} className="status__button-root">
              {
                props.answers[question.id] !== undefined ?
                <Link to="/" className="button button--status button--answered">{(index + 1)<10?("0"+(index+1)):(index+1)}</Link> :
                <Link to="/" className="button button--status button--unanswered">{(index + 1)<10?("0"+(index+1)):(index+1)}</Link>
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