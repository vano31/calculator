let inputSection = document.querySelector(`#inputSection`);
let viewSection = document.querySelector(`#viewSection`);
const characters = document.querySelectorAll(`.character`);
const backspace = document.querySelector(`#backspace`);
const clear = document.querySelector(`#clear`);

let lastInput = ``;
let currentInput;
let fullString;
//let newExpression;
//let newNumber = `start`;
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

    //console.log(typeof(e.target.id));
    
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
      //operateSymbol = ``;
      
       
     }  else if (num1 !== `start`) {
       
       num2 = parseInt(inputSection.textContent);
       operate();
       operateSymbol = e.target.id
       viewSection.textContent = `${result}`;
       fullString = ``;
       lastInput = ``;
       inputSection.textContent = ``;
       num1 = parseInt(viewSection.textContent);
       //num2 = `start`;
       
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
characters.forEach((character) => {
  character.addEventListener(`click`, function(e) {
    //console.log(e.target.id);
    
    if (e.target.id === `backspace`) {
      fullString = fullString.slice(0,-1);
      newNumber = parseInt(fullString);
      inputSection.textContent = `${fullString}`;
      lastInput = fullString;
      newExpression = fullString.split("");
      
     
    } else if (e.target.classList.contains(`symbol`)) {
      
      if (fullString.includes(`+`) || fullString.includes(`-`) || fullString.includes(`/`) || fullString.includes(`*`) || fullString.includes(`%`)) {
        // put newNumber into viewSection
        viewSection.textContent = newNumber;
        
      } else  {
        if (e.target.id === `+`) {
          newNumber += parseInt(fullString);
        } else if (e.target.id === `-`) {
          newNumber -= parseInt(fullString);
        } else if (e.target.id === `*`) {
          newNumber *= parseInt(fullString);
        } else if (e.target.id === `/`) {
          newNumber /= parseInt(fullString);
        } else if (e.target.id === `%`) {
          newNumber %= parseInt(fullString);
        }
      }
      
      
    } else if (e.target.classList.contains(`number`))  {
        newNumber = parseInt(fullString);
        currentInput = `${e.target.id}` ;  
        fullString = lastInput + currentInput;  
        inputSection.textContent = `${fullString}`; 
        lastInput = fullString;
        newExpression = fullString.split("");
      
    }
  });
});

*/

clear.addEventListener(`click`, () => {
  fullString = ``;
  lastInput = ``;
  //newExpression = ``;
  inputSection.textContent = ``;
  viewSection.textContent = ``;
  //newNumber = `start`;
  operateSymbol = ``;
  num1 = `start`;
  num2 = `start`;
  result = `start`;
})


/*else if (e.target.classList.contains(`symbol`)) {
       
      
      if (newNumber !== `start`) {
        
     
        //newNumber += parseInt(fullString);
        if (e.target.id === `+`) {
          newNumber += parseInt(fullString);
        } else if (e.target.id === `-`) {
          newNumber -= parseInt(fullString);
        } else if (e.target.id === `*`) {
          newNumber *= parseInt(fullString);
        } else if (e.target.id === `/`) {
          newNumber /= parseInt(fullString);
        } else if (e.target.id === `%`) {
          newNumber %= parseInt(fullString);
        }
      }
      viewSection.textContent = newNumber;
      fullString = ``;
      lastInput = ``;
      newExpression = ``;
      inputSection.textContent = ``;
      

    }  */


//Use Array.from(firstInput) as the Array of the numbers that were inserted into the string firstInput
//let newExpression = inputSection.textContent;
//Ask- Why does Array.from() work by itself but return an empty string when its result is put in a variable?

/*
let numString = `987654`;
let numArray = Array.from(numString);
*/





