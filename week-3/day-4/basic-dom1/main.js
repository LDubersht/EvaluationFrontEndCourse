const velocity = 10

const moveRight = function(){
    let ball = document.getElementById("ball")
    let shift = parseInt(ball.style.left) || 0
    shift = (shift>=410) ? shift : shift + velocity
    ball.style.left = shift + "px"
  }
  document.getElementById("right").onclick = moveRight
  
  const moveLeft = function(){
    let ball = document.getElementById("ball")
    let shift = parseInt(ball.style.left) || 0
    shift = (shift<=0) ? shift : shift - velocity
    ball.style.left = shift + "px"
  }
  document.getElementById("left").onclick = moveLeft
  
  const moveUp = function(){
    let ball = document.getElementById("ball")
    let shift = parseInt(ball.style.top) || 0
    shift = (shift<=0) ? shift : shift - velocity
    ball.style.top = shift + "px"
  }
  document.getElementById("up").onclick = moveUp
  
  const moveDown = function(){
    let ball = document.getElementById("ball")
    let shift = parseInt(ball.style.top) || 0
    shift = (shift>=390) ? shift : shift + velocity
    ball.style.top = shift + "px"
  }
  document.getElementById("down").onclick = moveDown
  