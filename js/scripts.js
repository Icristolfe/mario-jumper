const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameBoard = document.querySelector('.game-board')
const reload = document.querySelector('.reload')
const startGame = document.querySelector('.startgame')
const altura = window.screen.height;
const largura = window.screen.width;


const gameLoop = () => {

    const loop = setInterval(() => {

        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        const pipePosition = pipe.offsetLeft

        if (largura > 600 && pipePosition <= 120 && pipePosition > 0 && marioPosition <= 100) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
            mario.src = './assets/game-over.png'
            mario.style.width = '75px'
            mario.style.marginLeft = `50px`

            reload.style.visibility = 'visible'
            reload.style.position = 'absolute'
            clearInterval(loop)

            gameOverAudio()
        }

        if (largura <= 600 && pipePosition <= 50 && pipePosition > 0 && marioPosition <= 55) {
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`
            mario.src = './assets/game-over.png'
            mario.style.width = '35px'
            mario.style.marginLeft = `19px`

            reload.style.visibility = 'visible'
            reload.style.position = 'absolute'
            clearInterval(loop)

            gameOverAudio()
        }
    }, 10);

}

const start = () => {
    startGame.style.visibility = 'hidden'
    pipe.style.animation = 'pipe-animation 2s infinite linear'

    gameLoop()
}

const jump = (e) => {
    e.preventDefault()
    mario.classList.add('jump')
    jumpAudio()

    if (largura <= 600) {
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 800)
    }
    else {
        setTimeout(() => {
            mario.classList.remove('jump')
        }, 800)
    }


}




const reloadGame = () => {
    location.reload()

}


const jumpAudio = () => {
    const audio = new Audio('./assets/pulomario.mp3')
    audio.play()

}

const gameOverAudio = () => {
    const gameOver = new Audio('./assets/gameover.mp3')
    gameOver.play()
}


document.addEventListener('keydown', jump)
document.addEventListener('click', jump)

reload.addEventListener('click', reloadGame)

startGame.addEventListener('click', start)

