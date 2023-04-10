let button = document.querySelector('.btn')
let color = document.querySelector('.color')
let container = document.querySelector('.container')

const colors = ['#FF0000','#FFA500','#FFFF00','#008000','#0000FF','#800080','#000000','#FFFFFF']

button.addEventListener('click' ,  e => {
    const randomNumber = generateRandom()
    
    color.textContent = colors[randomNumber]
    container.style.backgroundColor = colors[randomNumber]
})

function generateRandom(){
    return Math.floor(Math.random() * colors.length)
}
