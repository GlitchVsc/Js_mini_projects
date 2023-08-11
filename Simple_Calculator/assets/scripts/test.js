const defaultResult =  0 ;

let currentResult = defaultResult ; 
let array = [];

function getUserValue(){
    return +userInput.value;
}

function reFactoring(operator){
    const userVal = getUserValue()

    if
    (
        operator !== 'ADD' || 
        !userVal
    ){
        return;
    }

    const initialResult  = currentResult;
    let symbol;
    if( operator == 'ADD'){
        currentResult += userVal
        symbol = '+'
    }
    writeLogOutput(symbol , initialResult , userVal )
    createObject(initialResult , operator , currentResult , userVal )
}

function createObject(defaultInput , operation , result , uservalue){
    const object = {
        DefaultInput : defaultInput,
        Math : operation, 
        UserInput: uservalue,
        Result : result
    }
    array.push(object);
    console.log(array);

}

function writeLogOutput(operator , resultBefore , userVal){
    const logOutput = `${resultBefore} ${operator} ${userVal}`
    outputResult( currentResult, logOutput )
}

function add(){
    reFactoring('ADD')
    
}


addBtn.addEventListener('click' , add)