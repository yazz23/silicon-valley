var player1
var player2
var scoring
var player1j,player2j
var background
var ball
var score 

function preload(){
player1 = loadImage("red w ball.png")
player2 = loadImage("bluewball.png")
scoring = loadImage("shoot.png")
player1j = loadImage("redjumping.png")
player2j = loadImage("bluejumping.png")
backgroundimg = loadImage("bkgimg.jpg")
ballImg = loadImage("ball.png")
}

function setup() {
canvas = createCanvas(displayWidth - 20, displayHeight-30);
ball = createSprite(800,height/2,50,50)
ball.addImage(ballImg)

player = createSprite(400,600,50,50)
player.addImage(player1)

player22 = createSprite(900,500,50,50)
player22.addImage(player2)
player22.scale = 3
player22.velocityX = -5
score = 0
}


function draw() {
  background(backgroundimg);  
player.velocityX = 0
if(player22.x<width/2){
  player22.velocityX = 0
  player22.destroy()
  player22 = createSprite(width/2+100,500,10,10)
  player22.addImage(player2j)
  player22.scale = 2.5
}
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 5
  }


  if(keyDown(LEFT_ARROW)){
    player.velocityX = -5
  }
  
  if(player22.x===width/2){
   
  }
  if(player.x<width/2){
    player.velocityX = 0
    player.destroy()
    player = createSprite(width/2+100,500,10,10)
    player.addImage(player1j)
   
  }
  
  drawSprites();

  if(keyCode === UP_ARROW) {
    ball.velocityX = 7
  }
}