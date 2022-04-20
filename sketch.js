var ball = createSprite(50, 50, 20, 20);
ball.shapeColor = "purple";
ball.scale = 0.5;
//obstaculos
var obstacle1 = createSprite(18, 41, 20, 20);
obstacle1.shapeColor = "green";
obstacle1.scale = 0.5;
var obstacle2 = createSprite(11, 75, 20, 20)
obstacle2.shapeColor = "blue";
obstacle2.scale = 0.5;
var obtacle3 = createSprite(15,50,20,20);
obtacle3.shapeColor = "black";
obtacle3.scale = 0.5;
var obtacle4 = createSprite(75,35,20,20);
obtacle4.shapeColor = "yellow";
obtacle4.scale = 0.5;
var obtacle5 = createSprite(60,25,20,20);
obtacle5.shapeColor = "orange";
obtacle5.scale = 0.5;
var obtacle6 = createSprite(20,20,20,20);
obtacle6.shapeColor = "black";
obtacle6.scale = 0.5;
// puntos
var point1 = createSprite(50, 29, 24, 24);
point1.shapeColor = "F7FF00";
point1.scale = 0.5;
var point2 = createSprite(30, 29, 24, 24);
point1.shapeColor = "FF0000";
point1.scale = 0.5;
//final / salida
var final = createSprite(90, 50, 20, 20);
final.shapeColor="pink"
final.scale=0.5;
createEdgeSprites();
var gameState = "0";
var score = 0
var lifes = 1
obstacle1.velocityX = 5
obstacle2.velocityX = -3
obstacle3.velocityX = 7
obstacle4.velocityX = -4
obstacle5.velocityX = 6
obstacle6.velocityX = -10

function draw() {
    createCanvas(100, 100);
    backGround("red");
    drawSprites();
    textSize(22);
    text("puntos", 90, 95);
    text(score, 96, 95);
    text("vidas", 10, 95);
    text(lifes, 16, 95);
    if (keyDown("left")) {
        ball.x = ball.x - 50
    }
    if (keyDown("right")) {
        ball.x = ball.x 50
    }
    if (keyDown("up")) {
        ball.y = ball.y 50
    }
    if (keyDown("down")) {
        ball.y = ball.y - 50
    }
    obstacle1.bounceOff(edges);
    obstacle2.bounceOff(edges);
    obstacle3.bounceOff(edges);
    obstacle4.bounceOff(edges);
    obstacle5.bounceOff(edges);
    obstacle6.bounceOff(edges);
    if (ball.isTouching(point1)) {
        point1.remove();
        score = score + 1
    }
    if (ball.isTouching(point2)) {
        point2.remove();
        score = score + 1
    }
    if (obstacle1.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (obstacle2.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (obstacle3.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (obstacle4.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (obstacle5.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (obstacle6.isTouching(ball)) {
        reset();
        gameState = "Serve"
        lifes = lifes - 1
    }
    if (ball.isTouching(edges)) {
        reset();
    }
    if (gameState == "Serve") {
        Text("Para moverte, usa las flechas", 10, 25);
    }
    else if (gameState == "end") {
        text("Tu juego termino", 50, 50);
        ball.remove();
    }

    function Reset() {
        ball.x = 50;
        ball.y = 15;
        ball.velocityX = 0;
        ball.velocityY = 0;
    }

    function lifeOver() {
        if (lifes > 1) {
            gameState = "serve";
        }
        else {
            gameState = "end"
            ball.remove();
        }

    }
}