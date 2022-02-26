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
