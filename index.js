let addInputs = document.querySelectorAll(".add");
let subtractInputs = document.querySelectorAll(".subtract");
let mulInputs = document.querySelectorAll(".multiply");
let divInputs = document.querySelectorAll(".divide");
let modInputs = document.querySelectorAll(".modulo");

let addition = document.querySelector(".answer1");
let subtraction = document.querySelector(".answer2");
let multiply = document.querySelector(".answer3");
let divide = document.querySelector(".answer4");
let modulo = document.querySelector(".answer5");

//keyup

addInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    addition.value = Number(addInputs[0].value) + Number(addInputs[1].value);
    //   addition.innerText.value = box1.value + box2.value;
  });
});
// addInputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.value = "";
//   });
// }); //needed if you don't use placeholder

subtractInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    subtraction.value =
      Number(subtractInputs[0].value) - Number(subtractInputs[1].value);
  });
});

mulInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    multiply.value = Number(mulInputs[0].value) * Number(mulInputs[1].value);
  });
});
console.log(mulInputs);

divInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    divide.value = Number(divInputs[0].value) / Number(divInputs[1].value);
  });
});

modInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    modulo.value = Number(modInputs[0].value) % Number(modInputs[1].value);
    //   addition.innerText.value = box1.value + box2.value;
  });
});
