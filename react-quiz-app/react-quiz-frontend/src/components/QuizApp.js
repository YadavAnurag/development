import React from 'react';
import Action from './Action';
import Questions from './Questions';
import Status from './Status';
import SubmitModal from './SubmitModal';
import axios from 'axios';

const PATH_BASE = "http://localhost:6001/api/question-management/questions";
const questions= [
  {
    id: 1,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 2,
    question: 'Which actress do you like most', 
    options: [
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  },
  {
    id: 3,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 1, option: '6am' },
      { id: 2, option: '7am'},
      { id: 3, option: '8am'},
      { id: 4, option: '12am'}
    ]
  },
  {
    id: 4,
    question: 'One of the best movie ?', 
    options: [
      { id: 1, option: 'Mulk' },
      { id: 2, option: 'Article 15'},
      { id: 3, option: 'Drive'},
      { id: 4, option: 'Pink'}
    ]
  },
  {
    id: 5,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 6,
    question: 'Which actress do you like most', 
    options: [
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  },
  {
    id: 7,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 1, option: '6am' },
      { id: 2, option: '7am'},
      { id: 3, option: '8am'},
      { id: 4, option: '12am'}
    ]
  },
  {
    id: 8,
    question: 'One of the best movie ?', 
    options: [
      { id: 1, option: 'Mulk' },
      { id: 2, option: 'Article 15'},
      { id: 3, option: 'Drive'},
      { id: 4, option: 'Pink'}
    ]
  },
  {
    id: 9,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 10,
    question: 'Which actress do you like most', 
    options: [
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  },
  {
    id: 11,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 1, option: '6am' },
      { id: 2, option: '7am'},
      { id: 3, option: '8am'},
      { id: 4, option: '12am'}
    ]
  },
  {
    id: 12,
    question: 'One of the best movie ?', 
    options: [
      { id: 1, option: 'Mulk' },
      { id: 2, option: 'Article 15'},
      { id: 3, option: 'Drive'},
      { id: 4, option: 'Pink'}
    ]
  },
  {
    id: 13,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 14,
    question: 'Which actress do you like most', 
    options: [
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  },
  {
    id: 15,
    question: 'Best time wo wake up ?', 
    options: [
      { id: 1, option: '6am' },
      { id: 2, option: '7am'},
      { id: 3, option: '8am'},
      { id: 4, option: '12am'}
    ]
  },
  {
    id: 16,
    question: 'One of the best movie ?', 
    options: [
      { id: 1, option: 'Mulk' },
      { id: 2, option: 'Article 15'},
      { id: 3, option: 'Drive'},
      { id: 4, option: 'Pink'}
    ]
  },
  {
    id: 17,
    question: 'Which game do you like most', 
    options: [
      { id: 1, option: 'CS GO' },
      { id: 2, option: 'WW 2'},
      { id: 3, option: 'PUBG'},
      { id: 4, option: 'Cyber Hunter'}
    ]
  },
  {
    id: 18,
    question: 'Which actress do you like most', 
    options: [
      { id: 1, option: 'Tapsee' },
      { id: 2, option: 'Disha'},
      { id: 3, option: 'Jacquiline'},
      { id: 4, option: 'Sarah'}
    ]
  }
];

class QuizApp extends React.Component{
  state = {
    questions: [],
    answers: {},
    openModal: false
  };
  getQuestionIds = ()=>{
    const questionIds = [];
    this.state.questions.map((question)=>{
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
  getQuestionsFromApi = ()=>{
    console.log("calling getQuestionsFromApi");
    this.setState(()=>({questions: questions}));
    // axios.get(PATH_BASE, {
    //   params: {
    //     id: 1
    //   }
    // })
    // .then((res)=>{
    //   this.setState(()=>({questions: res.data.questions}));
    //   const json = JSON.stringify(res.data.questions);
    //   localStorage.setItem('questions', json);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
    // .finally(()=>{
    //   console.log("finally question called");
    // });
  }
  postQuestionsToApi = ()=>{
    axios.post(PATH_BASE, {
      "answers": this.state.answers
    })
    .then((res)=>{
      if(res.status === 200){
        alert('successfully submitted');
        console.log(res.data);
      }
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  handleSubmit = ()=> {
    this.setState(()=>({openModal: false}));
    this.postQuestionsToApi();
  }
  componentDidMount(){
    try {
      const answers = JSON.parse(localStorage.getItem('answers'));
      if(answers){
        this.setState(()=> ({answers}));
      }else{
        console.log('no answers');
      }
    } catch (error) {}
    try {
      const questions = JSON.parse(localStorage.getItem('questions'));
      if(questions){
        this.setState(()=> ({questions}));
      }else{
        this.getQuestionsFromApi();
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
      <div className="quiz-app">
        <div className="container">
          <Status 
            questions={this.state.questions}
            answers={this.state.answers}
            clearAnswers={this.clearAnswers}
          />
          <Questions
            questions={this.state.questions} 
            answers={this.state.answers}
            optionChangeHandler={this.optionChangeHandler}
            clearAnswer={this.clearAnswer}
          />
          <Action 
            answerLength={Object.keys(this.state.answers).length}
            openSubmitModal={this.openSubmitModal}
            questionLength={this.state.questions.length}
          />
        </div>
        <SubmitModal
          answerLength={Object.keys(this.state.answers).length}
          closeSubmitModal={this.closeSubmitModal}
          handleSubmit={this.handleSubmit}
          openModal={this.state.openModal} 
          questionLength={this.state.questions.length}
        />
      </div>
    );
  };
}

export default QuizApp;