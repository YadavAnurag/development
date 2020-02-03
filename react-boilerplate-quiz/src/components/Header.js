import React from 'react';

const Header = (props)=>(
  <div>
    <div>{props.title}</div>
    {props.subtitle && <div>{ props.subtitle }</div>}
  </div>
);
Header.defaultProps ={
  title: 'QuizApp'
};

export default Header;