import React from 'react';
import Action from './Action';
import Footer from './Footer';
import Header from './Header';
import Questions from './Questions';
import Status from './Status';
import SubmitModal from './SubmitModal';


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
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  },
  {
    id: 3451,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 1, option: '6am' },
      { id: 2, option: '7am'},
      { id: 3, option: '8am'},
      { id: 4, option: '12am'}
    ]
  },
  {
    id: 6431,
    question: 'One of the best movie ?', 
    options: [
      { id: 1, option: 'Mulk' },
      { id: 2, option: 'Article 15'},
      { id: 3, option: 'Drive'},
      { id: 4, option: 'Pink'}
    ]
  }
];

class QuizApp extends React.Component{
  state = {
    answers: {},
    openModal: false
  };
  getQuestionIds = (questions)=>{
    const questionIds = [];
    questions.map((question)=>{
      questionIds.push(question.id);
    });
    console.log(questionIds);
    return questionIds;
  }
  clearAnswers = ()=>{
    localStorage.clear();
    location.reload();
  }
  clearAnswer = (questionId)=>{
    this.setState((prevState)=>{
      const answers = JSON.parse(JSON.stringify(prevState.answers));
      delete answers[questionId];
      return {answers: answers};
    });
  }
  optionChangeHandler = (questionId, answerId)=>{
    const answer = {};
    answer[questionId] = answerId;
    this.setState((prevState)=>{
      const answers = JSON.parse(JSON.stringify(prevState.answers));
      answers[questionId] = answerId;
      return {answers: answers}
    });
  };
  openSubmitModal = ()=>this.setState(()=>({openModal: true}));
  closeSubmitModal = ()=>this.setState(()=>({openModal: false}));
  handleSubmit = ()=> {
    this.setState(()=>({openModal: false}));
    alert('Final submit');
  }
  componentDidMount(){
    try {
      const json = localStorage.getItem('answers');
      const answers = JSON.parse(json);
      if(answers){
        this.setState(()=> ({answers}));
      }
    } catch (error) {}
  };
  componentDidUpdate(prevProps, prevState){
    if(JSON.stringify(prevState.answers) !== JSON.stringify(this.state.answers)){
      const json = JSON.stringify(this.state.answers);
      localStorage.setItem('answers', json);
    }
  };
  componentWillUnmount(){
    console.log('componentWillUnmount');
  };

  render(){
    const subtitle = 'Hello... can you answer these questions ?';
  
    return (
      <div>
        <Header subtitle={subtitle} />
        <Status 
          questions={questions}
          answers={this.state.answers}
        />
        <button onClick={this.clearAnswers}>Clear</button>
        <Questions 
          questions={questions} 
          answers={this.state.answers}
          optionChangeHandler={this.optionChangeHandler}
          clearAnswer={this.clearAnswer}
        />
        <Action 
          answerLength={Object.keys(this.state.answers).length}
          openSubmitModal={this.openSubmitModal}
          questionLength={questions.length}
        />
        <SubmitModal
          answerLength={Object.keys(this.state.answers).length}
          closeSubmitModal={this.closeSubmitModal}
          handleSubmit={this.handleSubmit}
          openModal={this.state.openModal} 
          questionLength={questions.length}
        />
        <Footer />
      </div>
    );
  };
}

export default QuizApp;