const prev = {1: 10, 2:20};
const update = {1:10, 2:40};
console.log(prev, update);
const checkEquality = (prev, update)=>{
  const arr = Object.keys(update);
  for(let i=0; i<arr.length; i++){
    if(update[arr[i]] == prev[arr[i]]){
      console.log('match');
    }else{
      console.log('no match');
      return false;
    }
  }
}
const result = checkEquality(prev, update);
console.log(result);