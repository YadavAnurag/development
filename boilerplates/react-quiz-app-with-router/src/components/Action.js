import React from 'react';

const Action = (props)=>(
  <div>
    <button 
      type='submit'
      onClick={()=>{props.openSubmitModal();}}
    >
      Submit
    </button>
  </div>
);

export default Action;