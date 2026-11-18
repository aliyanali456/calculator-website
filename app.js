


// function getvalue() {

//     var inputElement = input.getElementById("username")

//     console.log(inputElement);

//     //  return inputElement



// }

// getvalue()


// function getValue() {

//     // get element
//     var inputElement = document.getElementById("userName");

//   console.log("getValue", inputElement.value);
// //   console.log("getValue", inputElement.value);

// //   alert(inputElement.value)
// }

// function setValue(){
// //  element get hoga
//     var inputElement = document.getElementById("userName")
//     console.log(inputElement.value)

//     // element ki value ko set kr rhy ho
//     inputElement.value = "Jaffar Aman"
// }







// function setInputValue(value) {
//   var input = document.getElementById("input");
//   //   console.log("setInputValue", input);
//   input.value += value;
// }



// function calcAns() {
//   var input = document.getElementById("input");
//   var ans = eval(input.value);
//   console.log("ans", ans);
//   input.value = ans
// }



// function getValue(value){

//     var  inputNumber =   document.getElementById("userName")
//       console.log(inputNumber.value)

//       return inputNumber

// }

// function getValue(value) {

//   var input = document.getElementById("userName");
//   //   console.log("setInputValue", input);
//   input.value += value;
// }

// function calcAns() {


//   var input = document.getElementById("userName");
//   var ans = eval(input.value);
//   console.log("ans", ans);
//   input.value = ans


// }

// function clearDigit() { 

//     var input = document.getElementById("userName");

//     input.value = input.value.slice(0 , -1);

//     // console.log("Remove"+remove)

// }

// function allRemove() {

//     var input = document.getElementById("userName");

//     input.value = "";

// }



function getValue(value) {

  var input = document.getElementById("userName");

  input.value += value ;

}


function calcAns() {

  var input = document.getElementById("userName");
   
   var ans = eval(input.value);

   console.log("ans "+ans)
   input.value = ans ;   
  //  456+3526

}

function clearDigit() {
  var input = document.getElementById("userName");
   
  input.value = input.value.slice(0 , -1);


}

function allRemove() {
  var input = document.getElementById("userName");
   
  input.value = " " ;


}