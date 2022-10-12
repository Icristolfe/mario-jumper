const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const gameBoard = document.querySelector('.game-board')
const reload = document.querySelector('.reload')
const counter = document.querySelector('.counter')
const counter2 = document.getElementById('counter2')
const altura = window.screen.height;
const largura = window.screen.width;

const jump = (e) => {
    e.preventDefault()
    mario.classList.add('jump')
   

   if(largura <= 600){
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 1000)
   }
   else {
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 800)
   }
   
   jumpAudio()

}


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
        
        gameOverAudio()
        clearInterval(loop)
    }

    if (largura <= 600 && pipePosition <= 90 && pipePosition > 0 && marioPosition <= 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`   
        console.log(marioPosition)

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './assets/game-over.png'
        mario.style.width = '60px'
        mario.style.marginLeft = `37px`

        reload.style.visibility = 'visible'
        reload.style.position = 'absolute'

        gameOverAudio()
        clearInterval(loop)
    }

}, 10)

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

const themeSong = () => {
    const themeAudio = new Audio('./assets/themesong.mp3')
    themeAudio.play()
}

// const theme = setTimeout(() => {
//     themeSong()
//     clearInterval(theme)
// }, 100);

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)

reload.addEventListener('click', reloadGame)

