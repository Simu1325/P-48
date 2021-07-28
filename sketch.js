var PLAY = 1;
var END = 0;
var gameState = PLAY;
var canvas,bgImage;
var gameState;
var player;
var Dora, Dora2, Bg2;
var spawnObstacles
function preload(){
    Dora_img1 = loadAnimation("img/D.png","img/D2.png");
    Bg2 = loadImage("img/Bg2.png");
}

function setup(){
    canvas = createCanvas(500,400);
     bgSprite = createSprite(800,200,1000,800)
     bgSprite.addImage(bg1)
    //  bgSprite.scale = 10;
     bgSprite.velocityX = -5;
     dora = createSprite(100,280,10,10);
    // dora.addImage(Dora_img1)
     dora.scale = 0.3;
    dora.addAnimation("Running",Dora_img1)
    //obstaclesGroup = createGroup();
}

function draw(){
    background("white");
    if(bgSprite.x < 200){
        bgSprite.x = bgSprite.width/2
    }

    drawSprites();
}

