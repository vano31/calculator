let inputSection = document.querySelector(`#inputSection`);
let viewSection = document.querySelector(`#viewSection`);
const characters = document.querySelectorAll(`.character`);
const backspace = document.querySelector(`#backspace`);
const clear = document.querySelector(`#clear`);

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
}

characters.forEach((character) => {
  character.addEventListener(`click`, function(e) {

    if (e.target.classList.contains(`number`)) {
            
       currentInput = `${e.target.id}` ;  
       fullString = lastInput + currentInput;  
       inputSection.textContent = `${fullString}`; 
       lastInput = fullString;
      
    } else if (e.target.id === `backspace`) {
      
      fullString = fullString.slice(0,-1);
      inputSection.textContent = `${fullString}`;
      lastInput = fullString;
      
      
    } else if (e.target.classList.contains(`symbol`)) {
      
     if (num1 === `start`) {
      
      operateSymbol = e.target.id;
      num1 = parseInt(fullString);
      viewSection.textContent = `${num1}`;
      fullString = ``;
      lastInput = ``;
      inputSection.textContent = ``;
       
     }  else if (num1 !== `start`) {
       
       num2 = parseInt(inputSection.textContent);
       operate();
       operateSymbol = e.target.id
       viewSection.textContent = `${result}`;
       fullString = ``;
       lastInput = ``;
       inputSection.textContent = ``;
       num1 = parseInt(viewSection.textContent);
       
     }
      
    } else if (e.target.id === `=`) {
      num2 = parseInt(fullString);
      operate();
      viewSection.textContent = `${result}`;
      inputSection.textContent = ``;
      num1 = result;
      operateSymbol = ``;
      fullString = ``;
      lastInput = ``;
      
    } 
    
  })
})

/*

Next steps are to make +/- button work, make sure decimal point works, add nice design, and make it
so that if inputSection is empty, the sign you use can be changed

*/

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








