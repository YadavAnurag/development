import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const ladders = [{
  id: '05b1',
  ladderName: 'my best ladder',
  description: 'this is description about the ladder',
  createdAt: 1000,
  problems: [
    {
      id: '34c3',
      problemName: 'beautiful Matrix',
      problemUrl: 'http://codeforces.com/problemset/problem/263/A',
      judge: 'Hackerrank',
      difficultyLevel: 'A',
      tags: ['stack', 'tree', 'string'],
      createdAt: -100
    }
  ]
}];
const filters = {
  text: 'matrix',
  sortBy: '',
  startDate: '',
  endDate: ''
}
// ADD_LADDER
const addLadder = (
  {
    ladderName = '',
    description = '',
    problems = [],
    createdAt = 0
  } = {}
)=>({
  type: 'ADD_LADDER',
  ladder: {
    id: uuid(),
    ladderName,
    description,
    problems,
    createdAt
  }
});

// REMOVE_LADDER
const removeLadder = (
  { id = '' }  = {}
)=>({
  type: 'REMOVE_LADDER',
  id
});
// EDIT_LADDER
const editLadder = (id, updates)=>({
  type: 'EDIT_LADDER',
  id,
  updates
});

// ADD_PROBLEM
const addProblem = (ladderId, {
  problemName = '',
  problemUrl = '',
  judge = '',
  difficultyLevel = '',
  tags = [],
  createdAt = 0
})=>({
  type: 'ADD_PROBLEM',
  ladderId,
  problem: {
    id: uuid(),
    problemName,
    problemUrl,
    judge,
    difficultyLevel,
    tags,
    createdAt
  }
});

// REMOVE_PROBLEM
const removeProblem = (
  { 
    ladderId = '',
    problemId = ''
  } = {}
)=>({
  type: 'REMOVE_PROBLEM',
  ladderId,
  problemId
});
// EDIT_PROBLEM
const editProblem = (
  {
    ladderId = '',
    problemId = '',
    updates = {}
  } = {}
)=>({
  type: 'EDIT_PROBLEM',
  ladderId,
  problemId,
  updates
});
// SET_TEXT_FILTER
const setTextFilter = (
  { text = '' } = {}
)=>({
  type: 'SET_TEXT_FILTER',
  text
});
// setProblemTagFilter
const setProblemTagFilter = (
  { tag = '' } = {}
)=>({
  type: 'SET_PROBLEM_TAG_FILTER',
  tag
});
// SET_START_DATE
const setStartDate = (
  { startDate = 0 } = {}
)=>({
  type: 'SET_START_DATE',
  startDate
});
// SET_END_DATE
const setEndDate = (
  { endDate = 0 } = {}
)=>({
  type: 'SET_END_DATE',
  endDate
});
// SORT_BY_DATE
const sortByDate = ()=>({
  type: 'SORT_BY_DATE'
});
// SORT_BY_JUDGE
const sortByJudge = ()=>({
  type: 'SORT_BY_JUDGE'
});
// SORT_BY_PROBLEM_DIFFICULTY_LEVEL
const sortByProblemDifficultyLevel = ()=>({
  type: 'SORT_BY_PROBLEM_DIFFICULTY_LEVEL'
});


// const store = createStore((state = {}, action)=>{
//   switch (action.type){
//     case 'ADD_LADDER':
//       return { count : state   .count + action.incrementBy}
//     default:
//       return state;
//   }
// });
// ladder reducer
const ladderReducerDefaultState = [];
const ladderReducer = (state = ladderReducerDefaultState, action)=>{
  switch(action.type){
    case 'ADD_LADDER':
      return [...state, action.ladder];
    case 'REMOVE_LADDER':
      return state.filter(({ id })=>(id !== action.id));
    case 'EDIT_LADDER':
      return state.map((ladder)=>{
        if(ladder.id === action.id){
          return { ...ladder, ...action.updates };
        }else{
          return ladder;
        }
      });
    case 'ADD_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const problems = ladder.problems.concat(action.problem);
          return {...ladder, problems: problems};
        }else{
          return ladder;
        }
      });
    case 'REMOVE_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const problems = ladder.problems.filter(({ id })=>( id !== action.problemId));
          return {...ladder, problems: problems}
        }else{
          return ladder;
        }
      });
    case 'EDIT_PROBLEM':
      return state.map((ladder)=>{
        if(ladder.id === action.ladderId){
          const updatedProblems = ladder.problems.map((problem)=>{
            if(problem.id === action.problemId){
              return {...problem, ...action.updates};
            }else{
              return problem;
            }
          });
          return {...ladder, problems: updatedProblems};
        }else{
          return ladder;
        }
      });
    default: 
      return state;
  }
};
// filter reducer
const filterRecuerDefaultState = {
  text: 'matrix',
  sortBy: '',
  startDate: '',
  endDate: ''
};
const filterReducer = (state = filterRecuerDefaultState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SET_PROBLEM_TAG_FILTER':
      return {...state, tag: action.tag};
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};
    case 'SORT_BY_JUDGE':
      return {...state, sortBy: 'judge'};
    case 'SORT_BY_PROBLEM_DIFFICULTY_LEVEL':
      return {...state, sortBy: 'problemDifficultyLevel'};
    default: 
      return state;
  }
};

// get visible items
const getVisibleLadders = (ladders, { text, sortBy, startDate, endDate })=>{
  return ladders.filter((ladder)=>{
    const startDateMatch = typeof startDate !== 'number' || ladder.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || ladder.createdAt <= endDate;
    const textMatch = ladder.ladderName.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

const getVisibleProblems = (ladders, { text, sortBy, startDate, endDate })=>{
  return ladders.filter((ladder)=>{
    const startDateMatch = typeof startDate !== 'number' || ladder.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || ladder.createdAt <= endDate;
    const textMatch = ladder.ladderName.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};



// store creation
const store = createStore(
  combineReducers({
    ladders: ladderReducer,
    filters: filterReducer
  })
);

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
});
const firstLadder = store.dispatch(addLadder({ ladderName: 'first ladder', description: 'some description', createdAt: 2000 }));
const secondLadder = store.dispatch(addLadder({ ladderName: 'my ladder', createdAt: 1000 }));
store.dispatch(addProblem(secondLadder.ladder.id, {problemName: 'first'}));
const secondUpdatedLadder = store.dispatch(addProblem(secondLadder.ladder.id, {problemName: 'second'}));
//store.dispatch(removeProblem({ladderId: secondUpdatedLadder.ladderId, problemId: secondUpdatedLadder.problem.id}));
const args = {ladderId: secondUpdatedLadder.ladderId, problemId: secondUpdatedLadder.problem.id, updates: {problemName: 'new name'}};
store.dispatch(editProblem(args));
store.dispatch(setTextFilter({ text: 'ladder' }));
store.dispatch(setStartDate({ startDate: 1000}));
store.dispatch(setEndDate({ endDate: -1000}));
store.dispatch(setProblemTagFilter({ tag: 'stack'}));

