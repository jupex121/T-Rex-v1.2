var gameState = "home";
var coins = 10000;
var el = 0;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var start, startImg, coinGroup, coin, coin2, coinImg, coinImg2;

var cloudsGroup, cloudImage, cloudImg2;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var meteorito, meteoritoImg, extincipm, extincipmImg;

var score = 0;
var gameOverImg,restartImg;
var jumpSound , checkPointSound, dieSound;

var shop, shopImg, retur, returnImg;
var upg1 = false;
var upg2 = false;
var upg3 = false;
var upg4 = false;
var upg5 = false;
var upg6 = false;
var upg7 = false;
var upg8 = false;
var upg9 = false;
var upg10 = false;
var upg11 = false;
var upg12 = false;

function preload(){

  groundImage = loadImage("images/ground2.png");

  trex_running = loadAnimation("images/trex1.png","images/trex3.png","images/trex4.png");
  trex_collided = loadAnimation("images/trex_collided.png");

  cloudImage = loadImage("images/cloud.png");

  startImg = loadImage("images/start.png");
  restartImg = loadImage("images/restart.png");
  gameOverImg = loadImage("images/gameOver.png");
  meteoritoImg = loadImage("images/meteorito.png");
  extincipmImg = loadImage("images/Extincipm.png");

  coinImg = loadAnimation("images/coin1.png", "images/coin2.png", "images/coin3.png", "images/coin4.png",
  "images/coin5.png", "images/coin6.png");
  coinImg2 = loadImage("images/coin1.png");
  shopImg = loadImage("images/shop.png");
  returnImg = loadImage("images/return.png");
  cloudImg2 = loadImage("images/cloudC.png");

  jumpSound = loadSound("audio/jump.mp3");
  dieSound = loadSound("audio/die.mp3");
  checkPointSound = loadSound("audio/checkPoint.mp3");

}

function setup() {
  createCanvas(displayWidth, displayHeight / 2 -100);
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.visible = false;
  
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.visible = false;
  ground.addImage(groundImage);
  
  meteorito = createSprite(25,25);
  meteorito.addImage("meteorito", meteoritoImg);
  meteorito.scale = 0.09;
  meteorito.visible = false;
  
  extincipm = createSprite(300,50);
  extincipm.addImage("Extincipm", extincipmImg);
  extincipm.scale = 1;
  extincipm.visible = false;
  
  gameOver = createSprite(displayWidth / 2, displayHeight / 2 -300);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;
  
  start = createSprite(displayWidth / 2 -25, displayHeight / 2 -200);
  start.addImage(startImg);
  start.visible = false;

  shop = createSprite(displayWidth / 2 -20, displayHeight / 2 -140);
  shop.addImage(shopImg);
  shop.visible = false;

  restart = createSprite(displayWidth / 2 +1, displayHeight / 2 -250);
  restart.addImage(restartImg);
  restart.visible = false;
 
  gameOver.scale = 0.5;
  start.scale = 0.25;
  shop.scale = 0.5;
  restart.scale = 0.5;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
  coinGroup = createGroup();

  trex.setCollider("circle",0,0,50);

  retur = createSprite(displayWidth / 2 +585, displayHeight / 2 -320);
  retur.addImage(returnImg);
  retur.scale = 0.4;
  retur.visible = false;

  coin2 = createSprite(displayWidth / 2 +600, displayHeight / 2 -360);
  coin2.addImage(coinImg2);
  coin2.scale = 0.25;
  coin2.visible = false;

  coin3 = createSprite(displayWidth / 2 -600, displayHeight / 2 -245);
  coin3.addImage(coinImg2);
  coin3.scale = 0.25;
  coin3.visible = false;

  coin4 = createSprite(displayWidth / 2 -600, displayHeight / 2 -195);
  coin4.addImage(coinImg2);
  coin4.scale = 0.25;
  coin4.visible = false;

  coin5 = createSprite(displayWidth / 2 -600, displayHeight / 2 -145);
  coin5.addImage(coinImg2);
  coin5.scale = 0.25;
  coin5.visible = false;

  coin6 = createSprite(displayWidth / 2 -300, displayHeight / 2 -245);
  coin6.addImage(coinImg2);
  coin6.scale = 0.25;
  coin6.visible = false;

  coin7 = createSprite(displayWidth / 2 -300, displayHeight / 2 -195);
  coin7.addImage(coinImg2);
  coin7.scale = 0.25;
  coin7.visible = false;

  coin8 = createSprite(displayWidth / 2 -300, displayHeight / 2 -145);
  coin8.addImage(coinImg2);
  coin8.scale = 0.25;
  coin8.visible = true;

  coin9 = createSprite(displayWidth / 2, displayHeight / 2 -245);
  coin9.addImage(coinImg2);
  coin9.scale = 0.25;
  coin9.visible = true;

  coin10 = createSprite(displayWidth / 2, displayHeight / 2 -195);
  coin10.addImage(coinImg2);
  coin10.scale = 0.25;
  coin10.visible = false;

  coin11 = createSprite(displayWidth / 2, displayHeight / 2 -145);
  coin11.addImage(coinImg2);
  coin11.scale = 0.25;
  coin11.visible = true;

  coin12 = createSprite(displayWidth / 2 +300, displayHeight / 2 -245);
  coin12.addImage(coinImg2);
  coin12.scale = 0.25;
  coin12.visible = true;

  coin13 = createSprite(displayWidth / 2 +300, displayHeight / 2 -195);
  coin13.addImage(coinImg2);
  coin13.scale = 0.25;
  coin13.visible = true;

  coin14 = createSprite(displayWidth / 2 +300, displayHeight / 2 -145);
  coin14.addImage(coinImg2);
  coin14.scale = 0.25;
  coin14.visible = false;
}

function draw() {
  background("gray");
 
  if(gameState == "home") {
    textSize(40);
    stroke("black")
    strokeWeight(2.5);
    fill("white");
    text("Welcome to T-Rex Runner!", displayWidth / 2 -250, displayHeight / 2 -300);

    if(mousePressedOver(start)) {
      gameState = "play";
    }

    if(mousePressedOver(shop)) {
      gameState = "shop";
    }

    coin2.visible = false;
    coin3.visible = false;
    coin4.visible = false;
    coin5.visible = false;
    coin6.visible = false;

    coin7.visible = false;
    coin8.visible = false;
    coin9.visible = false;
    coin10.visible = false;
    coin11.visible = false;

    coin12.visible = false;
    coin13.visible = false;
    coin14.visible = false;
    trex.visible = false;
    ground.visible = false;

    retur.visible = false;
    start.visible = true;
    shop.visible = true;
  }

  if(gameState === "shop") {
    textSize(22.5);
    fill("white");
    stroke("black");
    strokeWeight(2);
    text("Welcome to the shop! Here you will be able to buy upgrades and much more!", displayWidth / 2 -375, displayHeight / 2 -350);
    
    textSize(21.5);
    text("Click the coin besides the item to buy it", displayWidth / 2 -180, displayHeight / 2 -320);

    textSize(19.5);
    text("P.D. The upgrades are lost if the game is closed or refreshed.", displayWidth / 2 -260, displayHeight / 2 -290);

    retur.visible = true;

    if(mousePressedOver(retur)) {
      gameState = "home";
    }

    textSize(20);
    if(upg1 == false) {
      coin3.visible = true;
      text("300", coin3.x +20, coin3.y +8.5);
      text("2x Coins", coin3.x +65, coin3.y +8);
    }

    if(mousePressedOver(coin3) && coins >= 300 && upg1 == false) {
      upg1 = true;
      coins = coins -300;
    }


    if(upg2 == false) {
      coin4.visible = true;
      text("100", coin4.x +20, coin4.y +8.5);
      text("Extra Life", coin4.x +65, coin4.y +8);
    }

    if(mousePressedOver(coin4) && coins >= 100 && upg2 == false) {
      upg2 = true;
      coins = coins -100;
      el = 1;
    }


    if(upg3 == false) {
      coin5.visible = true;
      text("150", coin5.x +20, coin5.y +8.5);
      text("1st Obstacle", coin5.x +65, coin5.y +8);
    }

    if(mousePressedOver(coin5) && coins >= 150 && upg3 == false) {
      upg3 = true;
      coins = coins -150;
    }

    if(upg3 == false) {
      obstacle1 = loadImage("images/obstacle1.png");
    }
    else if(upg3 == true) {
      obstacle1 = loadImage("images/obstacle1C.png");
    }

    if(upg4 == false) {
      coin6.visible = true;
      text("160", coin6.x +20, coin6.y +8.5);
      text("2nd Obstacle", coin6.x +65, coin6.y +8);
    }

    if(mousePressedOver(coin6) && coins >= 160 && upg4 == false) {
      upg4 = true;
      coins = coins -160;
    }

    if(upg4 == false) {
      obstacle2 = loadImage("images/obstacle2.png");
    }
    else if(upg4 == true) {
      obstacle2 = loadImage("images/obstacle2C.png");
    }

    if(upg5 == false) {
      coin7.visible = true;
      text("170", coin7.x +20, coin7.y +8.5);
      text("3rd Obstacle", coin7.x +65, coin7.y +8);
    }

    if(mousePressedOver(coin7) && coins >= 170 && upg5 == false) {
      upg5 = true;
      coins = coins -170;
    }

    if(upg5 == false) {
      obstacle3 = loadImage("images/obstacle3.png");
    }
    else if(upg5 == true) {
      obstacle3 = loadImage("images/obstacle3C.png");
    }

    if(upg6 == false) {
      coin8.visible = true;
      text("180", coin8.x +20, coin8.y +8.5);
      text("4th Obstacle", coin8.x +65, coin8.y +8);
    }

    if(mousePressedOver(coin8) && coins >= 180 && upg6 == false) {
      upg6 = true;
      coins = coins -180;
    }

    if(upg6 == false) {
      obstacle4 = loadImage("images/obstacle4.png");
    }
    else if(upg6 == true) {
      obstacle4 = loadImage("images/obstacle4C.png");
    }
    
    if(upg7 == false) {
      coin9.visible = true;
      text("190", coin9.x +20, coin9.y +8.5);
      text("5th Obstacle", coin9.x +65, coin9.y +8);
    }

    if(mousePressedOver(coin9) && coins >= 190 && upg7 == false) {
      upg7 = true;
      coins = coins -190;
    }

    if(upg7 == false) {
      obstacle5 = loadImage("images/obstacle5.png");
    }
    else if(upg7 == true) {
      obstacle5 = loadImage("images/obstacle5C.png");
    }

    if(upg8 == false) {
      coin10.visible = true;
      text("200", coin10.x +20, coin10.y +8.5);
      text("6th Obstacle", coin10.x +65, coin10.y +8);
    }

    if(mousePressedOver(coin10) && coins >= 200 && upg8 == false) {
      upg8 = true;
      coins = coins -200;
    }
    
    if(upg8 == false) {
      obstacle6 = loadImage("images/obstacle6.png");
    }
    else if(upg8 == true) {
      obstacle6 = loadImage("images/obstacle6C.png");
    }

    if(upg9 == false) {
      coin11.visible = true;
      text("210", coin11.x +20, coin11.y +8.5);
      text("Sky", coin11.x +65, coin11.y +8);
    }

    if(mousePressedOver(coin11) && coins >= 210 && upg9 == false) {
      upg9 = true;
      coins = coins -210;
    }


    if(upg10 == false) {
      coin12.visible = true;
      text("220", coin12.x +20, coin12.y +8.5);
      text("Clouds", coin12.x +65, coin12.y +8);
    }

    if(mousePressedOver(coin12) && coins >= 220 && upg10 == false) {
      upg10 = true;
      coins = coins -220;
    }
    

    if(upg11 == false) {
      coin13.visible = true;
      text("230", coin13.x +20, coin13.y +8.5);
      text("Speed Up 2x", coin13.x +65, coin13.y +8);
    }
    
    if(mousePressedOver(coin13) && coins >= 230 && upg11 == false) {
      upg11 = true;
      coins = coins -230;
    }

    if(upg12 == false) {
      coin14.visible = true;
      text("300", coin14.x +20, coin14.y +8.5);
      text("Avoid Extinction - Evolve", coin14.x +65, coin14.y +8);
    }

    if(mousePressedOver(coin14) && coins >= 300 && upg12 == false) {
      upg12 = true;
      coins = coins -300;
    }    

    text(coins, displayWidth / 2 +625, displayHeight / 2 -352);
    coin2.visible = true;
    start.visible = false;
    shop.visible = false;
  }
  
  if(gameState == "play"){
    
    if(upg2 == true) {
      text("Extra Lives: " + el, displayWidth / 2 +280, displayHeight / 2 -352);
    }

    if(upg9 == true) {
      background(103, 173, 206);
    }

    fill("white");
    stroke("black");
    strokeWeight(2.5);
    textSize(20);
    text("Score: "+ score, displayWidth / 2 +450, displayHeight / 2 -352);
    text(coins, displayWidth / 2 +625, displayHeight / 2 -352);

    gameOver.visible = false;
    start.visible = false;
    restart.visible = false;
    trex.visible = true;
    ground.visible = true;

    
    coin2.visible = true;
    shop.visible = false;
    trex.changeAnimation("running",trex_running);

    if(upg11 == false) {
      ground.velocityX = -(4 + 3 * score/100);
    }
    else if(upg11 == true) {
      ground.velocityX = -(8 + 3 * score / 100);
    }
    
    //scoring
    score = score + Math.round(getFrameRate()/60);
    
    if(score > 0 && score % 100 == 0) {
       checkPointSound.play();

    }
    
    if(score > 0 && score % 500 == 0 && upg1 == false) {
      coins = coins +0.5;
    }
    else if(score > 0 && score % 500 == 0 && upg1 == true) {
      coins = coins +1;
    }

    if (ground.x < 0) {
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space") && trex.y >= 160) {
      trex.velocityY = -12;
      jumpSound.play();
    }
    
    //add gravity
    trex.velocityY = trex.velocityY + 0.8
  
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles on the ground
    spawnObstacles();

    spawnCoins();
    
    if(obstaclesGroup.isTouching(trex) && el <= 0){
      gameState = "end";
      dieSound.play()
    }
    else if(obstaclesGroup.isTouching(trex) && el >= 0) {
      dieSound.play();
      obstaclesGroup.destroyEach();
      el = el -1;
    }

    if(coinGroup.isTouching(trex) && upg1 == false) {
      coins = coins +1;
      coinGroup.destroyEach();
    }
    else if(coinGroup.isTouching(trex) && upg1 == true) {
      coins = coins +2;
      coinGroup.destroyEach();
    }
    
    if(upg12 == false) {
      if(score === 1983) {
        meteorito.visible = true;
        meteorito.velocityX = 8;
        meteorito.velocityY = 5;
      }
    }
    else if(upg12 == true) {
      if(score === 1983) {
        meteorito.visible = false;
        meteorito.velocityX = 0;
        meteorito.velocityY = 0;
      }
    }
    
    
    if(meteorito.isTouching(invisibleGround)) {
      gameState = "end";
      meteorito.velocityY = 0;
      meteorito.velocityX = 0;
      extincipm.visible = true;
      meteorito.visible = false;
    }
    
  }
  else if (gameState === "end") {
    if(upg9 == true) {
      background(103, 173, 206);
    }

    gameOver.visible = true;
    restart.visible = true;
    coin2.visible = false;
    coinGroup.destroyEach();
    
    if(mousePressedOver(restart)) {
    reset();
    }
    
    //change the trex animation
    trex.changeAnimation("collided", trex_collided);
    
    ground.velocityX = 0;
    trex.velocityY = 0
    
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);    
  }
  
 
  //stop trex from falling down
  trex.collide(invisibleGround);

  drawSprites();
}

function reset(){
  gameState = "home";
  restart.visible = false;
  gameOver.visible = false;
  meteorito.visible = false;
  meteorito.x = 25;
  meteorito.y = 25;
  extincipm.visible = false;
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  score = 0;
}

function spawnObstacles(){
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(displayWidth / 2 +600, displayHeight / 2 -220, 10, 40);

    if(upg11 == false) {
      obstacle.velocityX = -(6 + score/100);
    }
    else if(upg11 == true) {
      obstacle.velocityX = -(12 + score/100);
    }
      
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var cloud = createSprite(displayWidth / 2 +600, 10, 40, 10);
    cloud.y = Math.round(random(displayHeight / 2 -275, displayHeight / 2 -340));
    cloud.x = Math.round(random(displayWidth / 2, displayWidth / 2 +600));

    if(upg10 == false) {
      cloud.addImage(cloudImage);
    }
    else if(upg10 == true) {
      cloud.addImage(cloudImg2);
    }
    
    if(upg11 == false) {
      cloud.velocityX = -3;
    }
    else if(upg11 == true) {
      cloud.velocityX = -6;
    }

    cloud.scale = 0.5;
    cloud.lifetime = 440;
    
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudsGroup.add(cloud);
  }
}

function spawnCoins() {
  if (frameCount % 900 === 0){
    coin = createSprite(displayWidth / 2 +600, displayHeight / 2 -300,);
    coin.addAnimation("coins", coinImg);
    coin.visible = true;
    
    if(upg11 == false) {
      coin.velocityX = -(6 + score/100);
    }
    else if(upg11 == true) {
      coin.velocityX = -(12 + score/100);
    }
    
    coin.scale = 0.25;
    coin.lifetime = 300;
    coinGroup.add(coin);
  }
}