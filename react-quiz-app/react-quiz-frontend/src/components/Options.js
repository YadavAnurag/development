import React from 'react';
import Option from './Option';

const Options = (props)=>(
  <div>
    <ul>
      {
        props.options.map((optionObj, index)=>{
          return (
            <Option 
              key={index} 
              optionText={optionObj.option}
              optionId={optionObj.id} 
              questionId={props.questionId}
              userChoseOptionId={props.userChoseOptionId}
              optionChangeHandler={props.optionChangeHandler}
            />
          );
        })
      }
    </ul>
  </div>
);

export default Options;