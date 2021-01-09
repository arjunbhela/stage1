var player, playerImg
var edges= []
var gMiddle
var coin
var obstacle
var rand
var score = 0
var gameState = "PLAY"
var coinGroup
var obGroup
var coinImg
var bgImg
function preload(){
playerImg = loadImage("images/creature.png")
coinImg = loadImage("images/coin.png")
bgImg = loadImage("images/bg.jpg")
}

function setup() {
  createCanvas(800,600);
  player = createSprite(100, 100, 50, 50);
  //player.addImage(playerImg)
  player.scale = 0.1
  //player.debug = true
  //player.setCollider("circle",0,0,300)
  edges = createEdgeSprites()

  gTop = createSprite(400,180,800,10)
  gMiddle = createSprite(400,400,800,10)
  
  coinGroup = new Group()
  obGroup = new Group()
}

function draw() {
  background(0);  
  drawSprites();

  if (keyDown("space")) {
    player.velocityY = -12;
  }
  player.velocityY =  player.velocityY+0.8;

  player.collide(edges[3])
  player.collide(edges[2])
  if (keyDown(DOWN_ARROW)&&player.y < 400) {
    player.y = player.y+180;
  }

  if (keyDown(UP_ARROW)&&player.y > 160) {
    player.y = player.y-190;
  }
  player.collide(gTop)
  player.collide(gMiddle)
spawnCoins();
spawnOb();
textSize(20)
fill("white")
text("Score: "+score,660,50)
/*for (var i =0; i < coinGroup.length; i++) {
if (coinGroup.get(i)!= null&&coinGroup.get(i).isTouching(player)) {
coinGroup.get(i).destroy();
score++
}
}*/
}

function spawnCoins() {
  rand = Math.round(random(1,3))
  if (frameCount % 80 == 0) {
coin = createSprite(820,300,10,10)
//coin.addImage(coinImg)
coin.scale = 0.1
coin.velocityX = -5;
coin.lifetime = 164;
console.log(rand)
if (rand == 1) {
  coin.y = 575;
} else if (rand == 2) {
  coin.y = 370
} else if(rand == 3) {
  coin.y = 150;
}
coinGroup.add(coin)
  } 
}

function spawnOb() {
  rand = Math.round(random(1,3))
  if (frameCount % 100 == 0) {
    obstacle = createSprite(820,300,10,20)
    obstacle.velocityX = -5;
    obstacle.lifetime = 164;
    obstacle.shapeColor = "red"
    if (rand == 1) {
      obstacle.y = 575;
    } else if (rand == 2) {
      obstacle.y = 370
    } else if(rand == 3) {
      obstacle.y = 150;
    }
  }
}
