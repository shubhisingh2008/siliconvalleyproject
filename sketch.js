var bg,bg2,bg3;
var score=0;
var gameState = "start";
var person,persomimg;

function preload() {
  bg = loadImage("bck.jpg");
  bg2 = loadImage("bg1.jpg");
  bg3 = loadImage("bgmarket.jpg");

}

function setup() {
  createCanvas(1000,600);
 


}

function draw() {

  if(gameState === "start"){
    background(bg);
      fill("black")
  textSize(20)
  text("WELCOME TO OUR HEALTH GAME",200,50)

  fill("blue")
  textSize(15)
  text("WE WILL HELP YOU TO FIND OUT THE PH LEVEL OF YOUR DAILY FOOD CONSUMPTION",80,200)

  fill("blue")
  textSize(15)
  text("IF YOU WANT TO KNOW YOUR FOOD'S PH LEVEL SO CLICK ON SPACEBAR TO ENTER OUR GAME",50,300)
  }
  
  if(keyDown("space")){
    gameState = "play";
    
  }

  if(gameState === "play"){
    background(bg3)
    
    
  }

  drawSprites()
}