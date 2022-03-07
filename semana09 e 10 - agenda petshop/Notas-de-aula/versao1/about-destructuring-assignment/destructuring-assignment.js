
//What is destructuring assignment and its uses?
//https://stackoverflow.com/questions/54605286/what-is-destructuring-assignment-and-its-uses


// Example to get properties such as length from an array, function name, number of arguments etc.

let arr = [1,2,3,4,5];

let {length} = arr;

console.log(length);

let func = function dummyFunc(a,b,c) {
  return 'A B and C';
}

let {name, length:funcLen} = func;

console.log(name, funcLen);