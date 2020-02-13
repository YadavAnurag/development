import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const quizzes = [
  {
    id: '0ba1',
    quizName: 'quiz 1',
    description: 'this is description about the quiz 1',
    createdAt: 1000,
    modifiedAt: 2000,
    questions: [
      {
        id: '1',
        createdAt: 1000,
        question: 'Which actress do you like most', 
        options: [
          { id: 1, option: 'Tapsee' },
          { id: 2, option: 'Disha'},
          { id: 3, option: 'Jacquiline'},
          { id: 4, option: 'Sarah'}
        ],
      }
    ]
  }
];
const answers = {
  '1':2,
  '2':3
};
const filters = {}
const demoState = {
  quizzes: quizzes,
  answers: answers,
  openQuizSubmitModal: false,
  filters: filters
};
const answersDemo = [
  {
    quizId: 0,
    answers: [
      { questionId: '0b11', optionId: 1},
      { questionId: '0b11', optionId: 1}
    ]
  }
];


// ADD_QUIZ
const addQuiz = (
  {
    quizName = '',
    description =  '',
    createdAt = '',
    modifiedAt = '',
    questions = []
  } = {}
)=>({
  type: 'ADD_QUIZ',
  quiz: {
    id: uuid(),
    quizName,
    description,
    createdAt,
    modifiedAt,
    questions
  }
});

// REMOVE_QUIZ
const removeQuiz = (
  {
    id = 0
  } = {}
)=>({
  type: 'REMOVE_QUIZ',
  id
});

// EDIT_QUIZ
const editQuiz = (
  {
    id = 0,
    updates = {}
  } = {}
)=>({
  type: 'EDIT_QUIZ',
  id,
  updates
});

// ADD_QUESTION
const addQuestion = (
  {
    quizId = 0,
    question = '',
    createdAt = 0,
    options = []
  } = {}
)=>{
  return ({
    type: 'ADD_QUESTION',
    quizId,
    questionObj: {
      id: uuid(),
      question,
      createdAt,
      options
    }
  })
};

// REMOVE_QUESTION
const removeQuestion = (
  {
    quizId = 0,
    questionId = 0
  } = {}
)=>({
  type: 'REMOVE_QUESTION',
  quizId,
  questionId
});

// EDIT_QUESTION
const editQuestion = (
  {
    quizId = 0,
    questionId = 0,
    updates = {}
  } = {}
)=>({
  type: 'EDIT_QUESTION',
  quizId,
  questionId,
  updates
});

// CHANGE_ANSWER
const changeAnswer = (
  {
    quizId = 0,
    answer = {}
  } = {}
)=>({
  type: 'CHANGE_ANSWER',
  quizId,
  answer
});
// CLEAR_ANSWER
// CLEAR_ANSWERS
// OPEN_QUIZ_SUBMIT_MODAL
// CLOSE_QUIZ_SUBMIT_MODAL
// SET_TEXT_FILTER
// SET_START_DATE
// SET_END_DATE
// SORT_BY_DATE

const quizReducerDefaultState = [];
const quizReducer = (state = quizReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_QUIZ':
      return state.concat(action.quiz);
    case 'REMOVE_QUIZ':
      return state.filter(({ id })=>( id === action.id ));
    case 'EDIT_QUIZ':
      return state.map((quiz)=>{
        if(quiz.id === action.id){
          return {...quiz, ...action.updates };
        }else{
          return quiz;
        }
      });
    case 'ADD_QUESTION':
      return state.map((quiz)=>{
        if(quiz.id === action.quizId){
          return {...quiz, questions: quiz.questions.concat(action.questionObj)};
        }else{
          return quiz;
        }
      });
    case 'REMOVE_QUESTION':
      return state.map((quiz)=>{
        if(quiz.id === action.quizId){
          const questions = quiz.questions.filter(({ id })=>(id !== action.questionId));
          return {...quiz, questions: questions};
        }else{
          return quiz;
        }
      });
    case 'EDIT_QUESTION':
      return state.map((quiz)=>{
        if(quiz.id === action.quizId){
          const updatedQuestions =  quiz.questions.map((question)=>{
            if(question.id === action.questionId){
              return {...question, ...action.updates};
            }else{
              return question;
            }
          });
          return {...quiz, questions: updatedQuestions};
        }else{
          return quiz;
        }
      });
    default:
      return state;
  }
};

const answersDemoCopy = [
  {
    quizId: 0,
    answers: [
      { questionId: '0b11', optionId: 1},
      { questionId: '0b21', optionId: 3}
    ]
  }
];
const answerReducerDefaultState = [];
const answerReducer = (state = answerReducerDefaultState, action)=>{
  switch(action.type){
    case 'CHANGE_ANSWER':
      if(state.length !== 0){
        //console.log('state not empty');
        let otherFoo = true;
        const newState = state.map((answerObjWithQuizId)=>{
          if(answerObjWithQuizId.quizId === action.quizId){
            //console.log('quiz found');
            let foo = true;
            let size = answerObjWithQuizId.answers.length;
            let updatedAnswers = [];
            let p = new Promise((resolve, reject)=>{
              updatedAnswers = answerObjWithQuizId.answers.map((answerObj, index)=>{
                //console.log(answerObj.questionId=== action.answer.questionId);
                if(answerObj.questionId === action.answer.questionId){
                  foo = false;
                 // console.log('quiz found and answerObj found');
                  return {...answerObj, ...action.answer};
                }else{
                  return answerObj;
                }
              });
              if(foo){
                reject();
              }else{
                resolve();
              }
            });
            p.then(()=>{}, ()=>{
              updatedAnswers.push(action.answer);
            });
            return {quizId: answerObjWithQuizId.quizId, answers: updatedAnswers};
          }else{
            otherFoo = false;
            //console.log('quiz not found');
            return answerObjWithQuizId;
            //return state.concat(newAnswerObjWithQuizId);
            //return state.concat('something');
          }
        });
        
        
        if(otherFoo === false){
          const newAnswerObjWithQuizId = {
            quizId: action.quizId,
            answers: [action.answer]
          };
          //console.log('final', newState.concat(newAnswerObjWithQuizId));
          return newState.concat(newAnswerObjWithQuizId);
        }
      }else{
        //console.log('state empty');
        const newAnswerObjWithQuizId = {
          quizId: action.quizId,
          answers: [action.answer]
        }
        return [newAnswerObjWithQuizId];
      }
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: 0,
  endDate: 1000
};
const filterReducer = (state = filterReducerDefaultState, action)=>{
  switch(action.type){
    default:
      return state;
  }
};

const utilReducerDefaultState = {
  openQuizSubmitModal: false
};
const utilReducer = (state = utilReducerDefaultState, action)=>{
  switch(action.type){
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    quizzes: quizReducer,
    answers: answerReducer,
    util: utilReducer, 
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState().answers);
});

const firstQuiz = store.dispatch(addQuiz({ 
  quizName: 'first quiz', description: 'description about first quiz'
}));
const secondQuiz = store.dispatch(addQuiz({ 
  quizName: 'second quiz', description: 'description about second quiz'
}));
//store.dispatch(removeQuiz({ id: firstQuiz.id }));
//store.dispatch(editQuiz({ id: firstQuiz.quiz.id, updates:{quizName: 'modified quiz'} }));
const firstQuestion = store.dispatch(addQuestion({ quizId: firstQuiz.quiz.id, question: 'first question first quiz', options: [{id: 1}, {id: 2}, {id: 3}, {id: 4}] }));
const secondQuestion = store.dispatch(addQuestion({ quizId: firstQuiz.quiz.id, question: 'second question first quiz', options: [{id: 1}, {id: 2}, {id: 3}, {id: 4}] }));
//store.dispatch(removeQuestion({ quizId: firstQuiz.quiz.id, questionId: firstQuestion.questionObj.id }));
//store.dispatch(editQuestion({ quizId: firstQuiz.quiz.id, questionId: firstQuestion.questionObj.id, updates: { question: 'edited question' } }));
store.dispatch(changeAnswer({ quizId: firstQuiz.quiz.id, answer: {questionId: firstQuestion.questionObj.id, optionId: 90}}));
store.dispatch(changeAnswer({ quizId: firstQuiz.quiz.id, answer: {questionId: 1000, optionId: 123456}}));
store.dispatch(changeAnswer({ quizId:1231654, answer: {questionId: 1000, optionId: 123456}}));
store.dispatch(changeAnswer({ quizId:1231654, answer: {questionId: 1000, optionId: 123456}}));
store.dispatch(changeAnswer({ quizId:1231654, answer: {questionId: 2000, optionId: 123456}}));