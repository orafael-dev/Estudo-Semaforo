
const redBtn = document.getElementById('redBtn')
const yellowBtn = document.getElementById('yellowBtn')
const greenBtn = document.getElementById('greenBtn')
const autoBtn = document.getElementById('autoBtn')
const image = document.getElementById('image')

redBtn.addEventListener('click', () => {
    image.src = "./assets/vermelho.png"
})

yellowBtn.addEventListener('click', () => {
    image.src = "./assets/amarelo.png"
})

greenBtn.addEventListener('click', () => {
    image.src = "./assets/verde.png"
})

