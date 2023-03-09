const characterAmountRange = document.querySelector('#CharacterAmountRange')
const characterAmountNumber = document.querySelector('#CharacterAmountNumber')
const includeUppecaseElement = document.querySelector('#includeUppercase')
const includeNumbersElement = document.querySelector('#includeNumbers')
const includeSymbolsElement = document.querySelector('#includeSymbols')
const form = document.querySelector('#passwordGeneratorForm')
const passwordDisplay = document.querySelector('#passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65 , 90);
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97 , 122);
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48 , 57);
const SYMBOL_CHAR_CODES = arrayFromLowtoHigh(37 , 47).concat(
    arrayFromLowtoHigh(58,64)
    ).concat(
        arrayFromLowtoHigh(91,96)
    ).concat(
        arrayFromLowtoHigh(123,126)
    )
//CONNECT THE RANGE SLIDER WITH THE NUMBER INPUT WITH EVENTS AND DIPLA TO FUNCTION
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value =value
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppecaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, 
    includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount,includeUppercase
,includeNumbers,includeSymbols){

    let charCodes = LOWERCASE_CHAR_CODES
    if (includeUppercase){ 
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)}
        if (includeNumbers){ 
            charCodes = charCodes.concat(NUMBER_CHAR_CODES)}
            if (includeSymbols)
                {charCodes = charCodes.concat(SYMBOL_CHAR_CODES)}

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low,high){
    const array = []
    for (let i = low;  i <=high; i++){
        array.push(i);
    }
    return array
}


