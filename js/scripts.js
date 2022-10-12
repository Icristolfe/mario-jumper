const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameBoard = document.querySelector('.game-board')
const reload = document.querySelector('.reload')
const counter = document.querySelector('.counter')
const counter2 = document.getElementById('counter2')

const jump = (e) => {
    e.preventDefault()
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800)

}


const loop = setInterval(() => {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const pipePostion = pipe.offsetLeft

    if (pipePostion <= 120 && pipePostion > 0 && marioPosition <= 100) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePostion}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './assets/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        reload.style.visibility = 'visible'
        reload.style.position = 'absolute'

        clearInterval(loop)
    }


}, 10)

const reloadGame = () => {
    location.reload()

}

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)

reload.addEventListener('click', reloadGame)