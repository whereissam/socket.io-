let socket

function setup() {
 createCanvas(800, 800)
 background(54)
 socket = io.connect('http://localhost:3000')
 socket.on('mouse', newDrawing) //handle new message
}

function newDrawing(data){
  noStroke()
  fill(255,0,100)
  ellipse(data.x, data.y, 36,36)
}

function mouseDragged(){
  console.log('Sending:'+ mouseX + ',' + mouseY)

  //save x, y position to socketio
  let data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data) // socket sent data to node server
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 36,36)
}

function draw() {

}