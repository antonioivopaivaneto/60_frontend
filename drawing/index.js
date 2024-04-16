const save = document.getElementById('save');
const sizedisplay = document.getElementById('size');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const inputColor = document.getElementById('color');
const btnClear = document.getElementById('clear');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let isPressed = false
let color = 'black'
let x  
let y  


save.addEventListener('click',(e) =>{
    saveCanvasImage()

})
increase.addEventListener('click',(e) =>{
    size++
    sizedisplay.innerHTML= size

})

decrease.addEventListener('click',(e) =>{
    size--
    sizedisplay.innerHTML= size
})

btnClear.addEventListener('click',(e) =>{
 clear()
})
inputColor.addEventListener('change',(e) =>{
 color = inputColor.value
})

canvas.addEventListener('mousedown',(e) =>{
    isPressed = true
    x = e.offsetX
    y = e.offsetY

    console.log(isPressed,x,y)
})

canvas.addEventListener('mouseup',(e) =>{
    isPressed = false
    
    x = undefined
    y = undefined

    console.log(isPressed,x,y)
})

canvas.addEventListener('mousemove',(e) =>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2,y2)
        drawLine(x,y, x2,y2)

        x=x2
        y=y2
    }
})

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fillStyle = color
    ctx.fill()


}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size *2
    ctx.stroke()
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



function saveCanvasImage() {
    // Cria uma URL da imagem a partir do conteúdo do canvas
    const image = canvas.toDataURL("image/png");

    // Cria um link para download da imagem
    const link = document.createElement('a');
    link.href = image;
    link.download = 'drawing.png'; // Nome do arquivo de download
    document.body.appendChild(link);

    // Simula um clique no link para iniciar o download
    link.click();

    // Remove o link do DOM após o download
    document.body.removeChild(link);
}
