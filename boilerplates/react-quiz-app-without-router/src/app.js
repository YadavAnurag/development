const questions= [
  {
    id: 1234,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 2243,
    question: 'Which actress do you like most', 
    options: [
      { id: 11, option: 'Tapsee' },
      { id: 22, option: 'Disha'},
      { id: 33, option: 'Jacquiline'},
      { id: 44, option: 'Sarah'}
    ]
  },
  {
    id: 3451,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 111, option: '6am' },
      { id: 222, option: '7am'},
      { id: 333, option: '8am'},
      { id: 444, option: '12am'}
    ]
  }
]

class QuizApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answers: {}
    };
    this.optionChangeHandler = this.optionChangeHandler.bind(this);
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('answers');
      const answers = JSON.parse(json);
      if(answers){
        this.setState(()=> ({answers}));
      }
    } catch (error) {}
  }
  componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevState.answers) !== JSON.stringify(this.state.answers)){
      const json = JSON.stringify(this.state.answers);
      localStorage.setItem('answers', json);
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  optionChangeHandler(questionId, answerId){
    const answer = {};
    answer[questionId] = answerId;
    this.setState((prevState)=>{
      return {answers: {...prevState.answers, ...answer}}
    });
  }

  render(){
    const subtitle = 'Hello... can you answer these questions ?';
    
    return (
      <div>
        <Header subtitle={subtitle} />
        <Status questionsLength={questions.length} answersLength={Object.keys(this.state.answers).length} />
        <Questions 
          questions={questions} 
          answers={this.state.answers}
          optionChangeHandler={this.optionChangeHandler}
        />
        <Action />
        <Footer />
      </div>
    )
  }
}

const Header = (props)=>{
  return (
    <div>
      <div>{props.title}</div>
      {props.subtitle && <div>{ props.subtitle }</div>}
    </div>
  )
}
Header.defaultProps ={
  title: 'QuizApp'
}

const Status = (props)=>{
  return (
    <div>
      {
        props.answersLength === props.questionsLength ?
        <p>Every question has been answered</p>:
        <p>You have answered {props.answersLength}/{props.questionsLength}</p>
      }
    </div>
  )
}

const Questions = (props)=>{
  return (
    props.questions.map((questionObj, index)=>{
      return (
        <QuestionCard 
          key={index} 
          questionObj={questionObj} 
          index={index}
          answers={props.answers}
          optionChangeHandler={props.optionChangeHandler}
        />
      )
    })
  )
}

const QuestionCard = (props)=>{
  return (
    <div>
      <Question questionText={props.questionObj.question} index={props.index} />
      <Options 
        options={props.questionObj.options} 
        questionId={props.questionObj.id} 
        userChoseOptionId={props.answers[props.questionObj.id]}
        optionChangeHandler={props.optionChangeHandler}
      />
    </div>
  )
}

const Question = (props)=>{
  return (
    <div> {props.index+1}. {props.questionText}</div>
  )
}

const Options = (props)=>{
  return (
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
            )
          })
        }
      </ul>
    </div>
  )
}

class Option extends React.Component{
  constructor(props){
    super(props)
    this.optionChangeHandler = this.optionChangeHandler.bind(this)
  }

  optionChangeHandler(e){
    this.props.optionChangeHandler(e.target.name, Number(e.target.value))
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
    )
  }
}

class Action extends React.Component{
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    alert('Sure to submit ?')
  }

  render(){
    return (
      <div>
        <button 
          type='submit'
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    )
  }
}

const Footer = ()=>{
  return (
    <div>
      <div>This is footer Component</div>
    </div>
  )
}

ReactDOM.render(<QuizApp />, document.getElementById('app'))