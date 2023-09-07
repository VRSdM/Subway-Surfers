var pista,boy, bordaE,bordaD;
var pistaImg,boyImg;
var i;

function preload(){

pistaImg = loadImage("path.png");
boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
 
}

function setup(){
  createCanvas(400,400);
pista = createSprite(200,200,20,20) ;
pista.addImage("trilho",pistaImg);
pista.velocityY=2;
pista.scale=1.2;

boy = createSprite(200,400,10,10);
boy.addAnimation("correndo",boyImg);
boy.scale=0.5;
  

bordaE=createSprite(0,0,100,800);
bordaE.visible=false;


bordaD=createSprite(410,0,100,800);
bordaD.visible=false;
}

function draw() {
  background(0);
  pista.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
 boy.collide(bordaD);
 boy.collide(bordaE);
  
  if(pista.y > 400 ){
    pista.y = height/2;
  }
  
  drawSprites();
}
