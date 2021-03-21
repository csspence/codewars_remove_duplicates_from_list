/*
Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/

const distinct = (a) => {
  let arr = [];
  let obj = {};
  for(let i = 0; i < a.length; i++) {
    if(obj[a[i]] === undefined) {
      obj[a[i]] = true;
      arr.push(a[i]);
    }
  }
  return arr;
}
