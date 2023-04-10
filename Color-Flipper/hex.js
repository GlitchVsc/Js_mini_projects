let button = document.querySelector('.btn')
let container = document.querySelector('.container')
let color = document.querySelector('.color')

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


button.addEventListener('click', (e) =>{
    color.innerHTML = generateNewColor()
    container.style.backgroundColor = generateNewColor();
})

function getCharater(index){
    return hexCharacters[index]
}


function generateNewColor(){
    let hexColorRep = "#"
    
    for ( index = 0; index < 6; index++){
        const randomValue = Math.floor(Math.random() * hexCharacters.length)
        hexColorRep += getCharater(randomValue)
    }
    return hexColorRep;
}