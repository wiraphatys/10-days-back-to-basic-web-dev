// declare array
let arr = [1,2,3,4,5];

// .length : length of array
let len = arr.length;
console.log("array size :", len);

// arr[idx] : access element by index
console.log(arr[0]);

// .push(element) : push element to array
arr.push(100);

// .pop() : remove element at last index in array
arr.pop();

// print array
console.log(arr);

// print each element in array
for (let i = 0; i < arr.length; ++i) console.log("index",i,"=",arr[i]);
