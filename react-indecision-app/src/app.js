class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      options: ['First thing', 'Second thing', 'Third thing']
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePickOptions = this.handlePickOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return {
        options: []
      }
    })
  }
  handlePickOptions(){
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }
  handleAddOption(option){
    
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render(){
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of computer'

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0 }
          handlePickOptions={this.handlePickOptions}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOptions
          handleAddOption={this.handleAddOption} 
        />
      </div>
    )
  }  
}

class Header extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{

  render(){
    return (
      <div>
        <button 
          onClick={this.props.handlePickOptions} 
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component{

  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option)=>{
            return <Option key={option} optionText={option} />
          })
        }
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
       {this.props.optionText}
      </div>
    )
  }
}

class AddOptions extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
  }
  handleAddOption(e){
    e.preventDefault()
    const target = e.target.elements.option
    const option = target.value.trim()

    target.value = ''

    if(option){
      this.props.handleAddOption(option)
    }
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))