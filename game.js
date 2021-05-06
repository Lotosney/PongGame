  
const canvas = document.createElement('canvas')
const w = canvas.width = 800
const h = canvas.height = 600
document.body.appendChild(canvas)
const context = canvas.getContext('2d')

const paddleWidth = h*.12

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        player.y -= 4
    } else if (event.key === 'ArrowDown') {
        player.y += 4
    }
})

const board = () => {
    context.beginPath()
    context.arc(w/2,h/2,h/20,0,2*Math.PI)
    context.moveTo(w/2,0)
    context.lineTo(w/2,h)
    context.stroke()
}
class Player {
    constructor(y) {
        this.y = y
    }

    draw = () => {
        context.beginPath()  
        context.fillRect(w*.03,this.y-(h*.06),w*.01, paddleWidth)
    }
}
const player = new Player(h/2)


function animate() {

    player.draw()
    board()
    requestAnimationFrame(animate)
}

animate()