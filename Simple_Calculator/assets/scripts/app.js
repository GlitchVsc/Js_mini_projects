const defaultResult = 0 ;
let currentResult = defaultResult ; 
const array = [];

function getUserInput(){
    return +userInput.value;
}

function operationLogic(operator){
    const userValue = getUserInput()
    if
    (
    operator !== 'ADD' &&
    operator !== 'SUBTRACT' &&
    operator !== 'MULTIPLY' &&
    operator !== 'DIVIDE' ||
    !userValue 
    ){
        return;
    }
        
        
    const initialResult = currentResult;
    let symbol;
    if( operator == 'ADD'){
            currentResult += userValue
            symbol = '+'
        }else if( operator == 'SUBTRACT'){
            currentResult -= userValue
            symbol = '-'
        }else if( operator == 'MULTIPLY'){
            currentResult *= userValue
            symbol = '*'
        }else if( operator == 'DIVIDE'){
            currentResult /= userValue
            symbol = '/'
        }
        createLogOutput(initialResult , symbol , userValue)
        createObject(initialResult,operator, userValue , currentResult)
}



function createLogOutput(firstResult , operator , userValue){
    let logOutput = (`${firstResult} ${operator} ${userValue}`);
    outputResult(currentResult,logOutput)
}

function createObject(resultBefore, operation , userInput , finalResult){
    const object = {
        IniResult : resultBefore ,
        Opetion: operation,
        UserVal: userInput,
        Result: finalResult
    }
    array.push(object)
    console.log(array)
}


function add(){
    operationLogic('ADD')
}

function subtract(){
    operationLogic('SUBTRACT')
}

function multiply(){
    operationLogic('MULTIPLY')
}

function divide(){
    operationLogic('DIVIDE')
}

addBtn.addEventListener('click' , add)
subtractBtn.addEventListener('click' , subtract)
multiplyBtn.addEventListener('click' , multiply)
divideBtn.addEventListener('click' , divide)