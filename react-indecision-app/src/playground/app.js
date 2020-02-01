class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePickOptions = this.handlePickOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
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

  handleDeleteOptions(){
    this.setState(()=> ({ options: [] }))
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState)=> ({
      options: prevState.options.filter((option)=> (optionToRemove !== option))
    }))
  }
  handlePickOptions(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    if(!option){
      return 'Enter a valid value to add option';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }else{
      this.setState((prevState)=> ({options: prevState.options.concat(option)}))
    }
  }

  render(){
    const subtitle = 'Put your life in the hands of computer'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0 }
          handlePickOptions={this.handlePickOptions}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions
          handleAddOption={this.handleAddOption} 
        />
      </div>
    )
  }  
}


const Header = (props)=>{
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <h2>{ props.subtitle }</h2>}
    </div>
  )
}
Header.defaultProps = {
  title: 'Indecision App'
}

const Action = (props)=>{
  return (
    <div>
      <button 
        onClick={props.handlePickOptions} 
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props)=>{
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to get started...!</p>}
      {
        props.options.map((option)=>{
          return (
            <Option 
              key={option} 
              optionText={option}
              handleDeleteOption={props.handleDeleteOption} 
            />
          )
        })
      }
    </div>
  )
}

const Option = (props)=>{
  return (
    <div>
      { props.optionText }
      <button 
        onClick={(e)=>{
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  )
}


class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: undefined
    }
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=> ({ error }))

    if(!error){
      e.target.elements.option.value = '';
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))