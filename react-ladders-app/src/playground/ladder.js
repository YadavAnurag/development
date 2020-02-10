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
const demoState = {
  ladders: ladders,
  filters,
};
console.log(demoState);