  
const canvas = document.createElement('canvas')
const w = canvas.width = 800
const h = canvas.height = 600
document.body.appendChild(canvas)
const context = canvas.getContext('2d')


const board = () => {
    context.beginPath()
    context.arc(w/2,h/2,h/20,0,2*Math.PI)
    context.moveTo(w/2,0)
    context.lineTo(w/2,h)
    context.stroke()
}


function animate() {


    board()
    requestAnimationFrame(animate)
}

animate()