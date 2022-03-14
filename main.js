const allClearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");
const operationButtons = document.querySelectorAll("[data-operation]");
const numberButtons = document.querySelectorAll("[data-number]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
    this.updateDisplay();
  }
  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;

    if (this.previousOperand !== "") {
      this.compute();
    }

    for (let i = 0; i < operationButtons.length; i++) {
      //cannot put operation right after operation
      if (
        operation === operationButtons[i].innerText &&
        this.previousOperand.includes(operation) &&
        this.currentOperand === ""
      )
        return;
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand + this.operation;
    this.currentOperand = "";
  }

  isValid() {
    if (
      this.currentOperand === "Math Error" ||
      this.currentOperand === "Infinity"
    ) {
      this.clear();
    }
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);

    if (this.previousOperand === "" || this.currentOperand === "") return;

    if (prev === 0 && this.operation === "÷" && curr === 0) {
      result = "Math Error";
      this.currentOperand = result;
      this.previousOperand = "";
      this.operation = undefined;
      return;
    }

    if (this.operation === "÷" && curr === 0) {
      result = "Infinity";
      this.currentOperand = result;
      this.previousOperand = "";
      this.operation = undefined;
      return;
    }

    switch (this.operation) {
      case "+":
        result = prev + curr;
        break;

      case "-":
        result = prev - curr;
        break;

      case "×":
        result = prev * curr;
        break;

      case "÷":
        result = prev / curr;
        break;

      default:
        return "Math Error";
    }
    this.currentOperand = Math.round(result * 1000) / 1000;
    this.previousOperand = "";
    this.operation = undefined;
  }

  updateDisplay() {
    this.previousOperandTextElement.innerText = this.previousOperand;
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.isValid();
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.isValid();
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
