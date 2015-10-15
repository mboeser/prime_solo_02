// ! ! !
// Three Bugs

var arrayAtticus = {
  name: "Atticus", 
  number: "2405", 
  salaryOject: "47000", 
  score: 3
};
var arrayJem = {
  name: "Jem", 
  number: "62347", 
  salaryOject: "63500", 
  score: 4
};
var arrayBoo = {
  name: "Boo", 
  number: "11435", 
  salaryOject: "54000", 
  score: 3
};
var arrayScout = {
  name: "Scout", 
  number: "6243", 
  salaryOject: "74750", 
  score: 5
};

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	// add [i] to array
  array[i] = calculateSTI(array[i]);
  console.log(array);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  console.log(newArray[0] = array.name);

  var employeeNumber = array.number;
  console.log(employeeNumber);
  var baseSalary = array.salaryOject;
  console.log(baseSalary);
  var reviewScore = array.score;
console.log(reviewScore);
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }
  console.log(bonus);
  // added paresInt to lines 42 & 43
  newArray[1] = bonus * 100;
  newArray[2] = parseInt(baseSalary * (1.0 + bonus));
  newArray[3] = parseInt(baseSalary * bonus);
  // assigned newArray to pretty log output - otherwise could have used .join(' ')
  console.log(newArray = (newArray[0] + " " + newArray[1] + '%' + " " + '$' + newArray[2] + " " + '$' + newArray[3]));
  //console.log(newArray[0])
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}