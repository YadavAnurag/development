import React from 'react';

const Action = (props)=>(
  <div>
    <button
      className="button button--md" 
      type='submit'
      onClick={()=>{props.openSubmitModal();}}
    >
      Submit
    </button>
  </div>
);

export default Action;