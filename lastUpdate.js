const shuffleArray = (array)=>{
  const arr = [...array];
  for(let i=arr.length-1; i>0 ; i--){
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const quizzes= [
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
  }
]

class QuizApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userAnswers: {2243: 44, 1234: 3}
    };

    this.optionChangeHandler = this.optionChangeHandler.bind(this)
  }
  optionChangeHandler(answer){
    this.setState((prevState)=>{
      console.log(prevState, answer)
      return {
        
      }
    })
  }

  render(){
    const title = 'QuizApp';
    const subtitle = 'Hello... can you answer these questions ?';
    const status = '1/10 questions has been answered';
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <QuizStatus status={status} />
        <Quizzes 
          quizzes={quizzes} 
          userAnswers={this.state.userAnswers}
          optionChangeHandler={this.optionChangeHandler}
        />
        <Action />
        <Footer />
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.subtitle}</div>
      </div>
    )
  }
}

class QuizStatus extends React.Component{
  render(){
    return (
      <div>
        <div>{this.props.status}</div>
      </div>
    )
  }
}

class Quizzes extends React.Component{  
  render(){
    return (
      shuffleArray(this.props.quizzes).map((quiz, index)=>{
        return (
          <Quiz 
            key={quiz.id} 
            quiz={quiz} 
            questionId={quiz.id} 
            index={index}
            userAnswers={this.props.userAnswers}
            optionChangeHandler={this.props.optionChangeHandler}
          />
        )
      })
    )
  }
}

class Quiz extends React.Component{
  render(){
    return (
      <div>
        <Question question={this.props.quiz.question} index={this.props.index} />
        <Options 
          options={this.props.quiz.options} 
          questionId={this.props.questionId} 
          userChoseOptionId={this.props.userAnswers[this.props.questionId]}
          optionChangeHandler={this.props.optionChangeHandler}
        />
      </div>
    )
  }
}

class Question extends React.Component{
  render(){
    return (
      <div> {this.props.index+1}. {this.props.question}</div>
    )
  }
}

class Options extends React.Component{
  render(){
    return (
      <div>
        <ul>
          {
            shuffleArray(this.props.options).map((optionObj)=>{
              return (
                <Option 
                  key={optionObj.id} 
                  optionText={optionObj.option}
                  optionId={optionObj.id} 
                  questionId={this.props.questionId}
                  userChoseOptionId={this.props.userChoseOptionId}
                  optionChangeHandler={this.props.optionChangeHandler}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    {console.log(1, this.props.optionId == this.props.userChoseOptionId, this.props.optionText)}
    return (
      <li className='option'>
        <input 
          type='radio'
          className='radioCustomButton'
          name={this.props.questionId}
          checked={this.props.optionId == this.props.userChoseOptionId}
          onChange={this.props.optionChangeHandler(this.props.questionId, this.props.optionId)}
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
    this.handleQuizSubmit = this.handleQuizSubmit.bind(this)
  }

  handleQuizSubmit(){
    alert('Sure to submit ?')
  }

  render(){
    return (
      <div>
        <div>
          <button 
            type='submit'
            onClick={this.handleQuizSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return (
      <div>
        <div>This is footer Component</div>
      </div>
    )
  }
}

ReactDOM.render(<QuizApp/>, document.getElementById('app'))