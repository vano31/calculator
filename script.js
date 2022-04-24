let inputSection = document.querySelector(`#inputSection`);
let viewSection = document.querySelector(`#viewSection`);
const characters = document.querySelectorAll(`.character`);
const backspace = document.querySelector(`#backspace`);
const clear = document.querySelector(`#clear`);
const calculator = document.querySelector(`#calculator`);

let lastInput = ``;
let currentInput;
let fullString;
let operateSymbol = ``;
let num1 = `start`;
let num2 = `start`;
let result = `start`;


let operate = function() {
  if (operateSymbol === `+`) {
    result = num1 + num2;
  } else if (operateSymbol === `-`) {
    result = num1 - num2;
  } else if (operateSymbol === `*`) {
    result = num1 * num2
  } else if (operateSymbol === `/`) {
    result = num1 / num2;
  } else if (operateSymbol === `^`)  {
    result = num1 ** num2;
  } else if (operateSymbol === `%`) {
    result = num1 % num2;
  }

  if (result >= 1000000000000) {
    result = result.toExponential(5);
  }
}

calculator.onmouseover = function(e) {
  let target = e.target;
  if (target.classList.contains(`button`)) {
    target.classList.add(`buttonHovered`);
  }
}

calculator.onmouseout = function(e) {
  let target = e.target;
  if (target.classList.contains(`buttonHovered`)) {
    target.classList.remove(`buttonHovered`);
  }
}

characters.forEach((character) => {
  character.addEventListener(`click`, function(e) {

    if (e.target.classList.contains(`number`) || e.target.id === `.`) {
            
       currentInput = `${e.target.id}` ;  
       fullString = lastInput + currentInput;  
       inputSection.textContent = `${fullString}`; 
       lastInput = fullString;
       if (inputSection.textContent.length === 21) {
        fullString = fullString.slice(0,-1);
        inputSection.textContent = `${fullString}`;
        lastInput = fullString;
       }
      
    } else if (e.target.id === `backspace`) {
      
      fullString = fullString.slice(0,-1);
      inputSection.textContent = `${fullString}`;
      lastInput = fullString;
      
      
    } else if (e.target.classList.contains(`symbol`)) {
      
     if (num1 === `start`) {
      
      operateSymbol = e.target.id;
      num1 = parseFloat(fullString);
      viewSection.textContent = `${num1}`;
      fullString = ``;
      lastInput = ``;
      inputSection.textContent = ``;
       
     }  else if (num1 !== `start`) {


      if (inputSection.textContent !== `` ) {

        num2 = parseFloat(inputSection.textContent);
        operate();
        operateSymbol = e.target.id;
        viewSection.textContent = `${result}`;
        fullString = ``;
        lastInput = ``;
        inputSection.textContent = ``;
        num1 = parseFloat(viewSection.textContent);


      } else if (inputSection.textContent === ``) {

        operateSymbol = e.target.id;

      }
       
     }
      
    } else if (e.target.id === `=`) {
      num2 = parseFloat(fullString);
      operate();
      viewSection.textContent = `${result}`;
      inputSection.textContent = ``;
      num1 = result;
      operateSymbol = ``;
      fullString = ``;
      lastInput = ``;
      
    } else if (e.target.id === `+/-`) {
      
      if (parseFloat(fullString) > 0) {

        fullString = `-` + fullString;
        inputSection.textContent = `-` + inputSection.textContent;

      } else if (parseFloat(fullString) < 0) {

        fullString = fullString.replace(`-`, ``);
        inputSection.textContent = (inputSection.textContent).replace(`-`, ``);

      }
    }
    
  })
})

clear.addEventListener(`click`, () => {
  fullString = ``;
  lastInput = ``;
  inputSection.textContent = ``;
  viewSection.textContent = ``;
  operateSymbol = ``;
  num1 = `start`;
  num2 = `start`;
  result = `start`;
})








