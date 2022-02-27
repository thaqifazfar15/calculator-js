const normalButtons = Array.from(document.querySelectorAll(".btn-normal"));

function addClass(elem, value) {
  //value must be in string
  elem.classList.add(value);
}

function removeClass(elem, value) {
  elem.classList.remove(value);
}

normalButtons.forEach((button) => {
  button.addEventListener("click", function () {
    addClass(button, "click");
    setTimeout(function () {
      removeClass(button, "click");
    }, 100);
  });
});

const buttonAC = document.querySelector(".btn-AC");
buttonAC.addEventListener("click", function () {
  addClass(buttonAC, "btn-AC-click");
  setTimeout(function () {
    removeClass(buttonAC, "btn-AC-click");
  }, 100);
});

const buttonDEL = document.querySelector(".btn-DEL");
buttonDEL.addEventListener("click", function () {
  addClass(buttonDEL, "btn-DEL-click");
  setTimeout(function () {
    removeClass(buttonDEL, "btn-DEL-click");
  }, 100);
});

let number1 = "";
let numerber2 = "";
counter = 0;

function round(value, decimals) {
  //so number don't overfloat
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function operate(num1, operator, num2) {
  if (num2 == 0 && operator == "/") {
    console.log("Math Error");
  } else {
    let num = (eval(`${num1}${operator}${num2}`) * 10) / 10;
    return round(num, 3).toString();
  }
}
