//  arrays and objects /

// array into a string /

const array = ["red", "green", "white", "black"];
let color = "";
for (let i = 0; i < array.length; i += 1) {
  if (i === array.length - 1) {
    color += array[i];
  } else {
    color = color + array[i] + "+";
  }
}
console.log(color);

//   difference between two arrays

const num1 = [10, 20, 30, 40];
const num2 = [50, 60, 10, 20];
const difference = num1.filter((element) => !num2.includes(element));
console.log(difference);

// ungrouping elements in array

const unzip = function (arr1) {
  let finalArray = [];
  let strArr = [],
    numArr = [],
    booleanArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      if (typeof arr1[i][j] === "string") {
        strArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "number") {
        numArr.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "boolean") {
        booleanArr.push(arr1[i][j]);
      }
    }
  }
  finalArray.push(strArr, numArr, booleanArr);
  console.log(`\n ${finalArray}`);
};

unzip([
  ["a", 1, true],
  ["b", 2, false],
]);
unzip([
  ["a", 1, true],
  ["b", 2],
]);


//   length of javascript object

let objLength = 0;
let obj = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
console.log(obj);
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    objLength += 1;
  }
}
console.log(objLength);

// program to create a clock 

const clock = function(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    let time = '';
    let noon = (hour > 12) ? 'PM' : 'AM';
    hour = (hour > 12) ? (hour - 12) : hour ;
    hour = (hour < 10) ? ("0" + hour) : hour;
    min = (min < 10) ? ("0" +min) : min;
    seconds = (seconds < 10) ? ("0" + seconds) : seconds;
    time = hour + ':' + min + ':' + seconds + ' ' + noon;
    console.log(time);
    
  }
  setInterval(clock, 10);