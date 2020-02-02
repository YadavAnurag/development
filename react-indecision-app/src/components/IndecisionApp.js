import React from 'react';
import AddOption from './AddOption';
import Options from './Options'
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  }
  handleDeleteOptions = ()=>{
    this.setState(()=> ({ options: [] }))
  };
  handleDeleteOption = (optionToRemove)=>{
    this.setState((prevState)=> ({
      options: prevState.options.filter((option)=> (optionToRemove !== option))
    }));
  };
  handlePickOptions = ()=>{
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(()=>({selectedOption}));
  };
  handleAddOption = (option)=>{
    if(!option){
      return 'Enter a valid value to add option';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }else{
      this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }
  };
  handleClearSelectedOption = ()=>{
    this.setState(()=>({selectedOption: undefined}));
  } 
  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(()=> ({ options }));
      }
    } catch (error) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount(){
    console.log('ComponentWillUnmount')
  }

  

  render(){
    const subtitle = 'Put your life in the hands of computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0 }
            handlePickOptions={this.handlePickOptions}
          />
          <div className="widget">
            <Options 
              options={this.state.options} 
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption} 
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption} 
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }  
}

export default IndecisionApp;