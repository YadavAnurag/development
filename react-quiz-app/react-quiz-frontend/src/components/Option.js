import React from 'react';

class Option extends React.Component{

  optionChangeHandler = (e)=>{
    this.props.optionChangeHandler(e.target.name, Number(e.target.value));
  }

  render(){
    return (
      <li className='option'>
        <input 
          type='radio'
          className='radioCustomButton'
          name={this.props.questionId}
          value={this.props.optionId}
          checked={this.props.optionId === this.props.userChoseOptionId}
          onChange={this.optionChangeHandler}
        />
        <label className='optionLabel'>
          {this.props.optionText}    
        </label>
      </li>
    );
  }
}

export default Option;