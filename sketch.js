let canvasX = 900;
let canvasY = 600;
let leftPlayer;
let rightPlayer;
let ball1;
let paddleWidth = 6;
let paddleHeight = 80;
let leftStartingX = 8;
let leftStartingY = canvasY/2 - paddleHeight/2;
let rightStartingX = 886;
let rightStartingY = canvasY/2 - paddleHeight/2;


function setup() {
	leftPlayer = new Paddle(leftStartingX,leftStartingY, paddleWidth, paddleHeight);
    rightPlayer = new Paddle(rightStartingX,rightStartingY,paddleWidth,paddleHeight);
    ball = new Ball(canvasX,canvasY);

	
}

function draw() {
    createCanvas(canvasX, canvasY);
    background(0);
    
    //MIDDLE LINE
    strokeWeight(6);
    stroke(255);
    line(450,600,450,0);
    //line(0,300,900,300);
    
    leftPlayer.show();
    rightPlayer.show();
    ball.show();
    //ball.move();
    moveBall();
    //ball.x -= 4;
    
    

}
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if(e.keyCode == '38'){
        leftPlayer.up();
    }else if(e.keyCode == '40'){
        leftPlayer.down();
    }
    if(e.keyCode == '87'){
        rightPlayer.up();
    }else if(e.keyCode == '83'){
        rightPlayer.down();
    }
    
    
}

document.onkeydown = checkKey;

function moveBall(){
        ball.x -= ball.xSpeed;
        ball.y -= ball.ySpeed;
        if(ball.x <= -10 || ball.x >= 910){
            ball.x = canvasX/2-4;
            ball.y = canvasY/2-4;
            ball.xSpeed = 4;
            ball.ySpeed = 0;
            leftPlayer.y = leftStartingY;
            rightPlayer.y = rightStartingY
        }else if(ball.x <= leftPlayer.x + paddleWidth && ball.y >= leftPlayer.y && ball.y <= leftPlayer.y + paddleHeight){
            ball.xSpeed = -4;
            if(ball.y + 4 < leftPlayer.y + 10){
                ball.ySpeed = 4;
            }else if(ball.y + 4 < leftPlayer.y + 20 && ball.y + 4 >= leftPlayer.y + 10){
                ball.ySpeed = 3;
            }else if (ball.y + 4 < leftPlayer.y + 30 && ball.y + 4 >= leftPlayer.y + 20){
                ball.ySpeed = 2;
            }else if (ball.y + 4 < leftPlayer.y + 50 && ball.y + 4 >= leftPlayer.y + 30){
                ball.ySpeed = 0;
            }else if (ball.y + 4 < leftPlayer.y + 60 && ball.y + 4 >= leftPlayer.y + 50){
                ball.ySpeed = -2;
            }else if (ball.y + 4 < leftPlayer.y + 70 && ball.y + 4 >= leftPlayer.y + 60){
                ball.ySpeed = -3;
            }else if (ball.y + 4 > leftPlayer.y + 70){
                ball.ySpeed = -4;
            }
        }else if(ball.x + 8 >= rightPlayer.x && ball.y >= rightPlayer.y && ball.y <= rightPlayer.y + paddleHeight){
            ball.xSpeed = 4;
            //ball.ySpeed *= -1;
            if(ball.y + 4 < rightPlayer.y + 10){
                ball.ySpeed = -4;
            }else if(ball.y + 4 < rightPlayer.y + 20 && ball.y + 4 >= rightPlayer.y + 10){
                ball.ySpeed = -3;
            }else if (ball.y + 4 < rightPlayer.y + 30 && ball.y + 4 >= rightPlayer.y + 20){
                ball.ySpeed = -2;
            }else if (ball.y + 4 < rightPlayer.y + 50 && ball.y + 4 >= rightPlayer.y + 30){
                ball.ySpeed = 0;
            }else if (ball.y + 4 < rightPlayer.y + 60 && ball.y + 4 >= rightPlayer.y + 50){
                ball.ySpeed = 2;
            }else if (ball.y + 4 < rightPlayer.y + 70 && ball.y + 4 >= rightPlayer.y + 60){
                ball.ySpeed = 3;
            }else if (ball.y + 4 > rightPlayer.y + 70){
                ball.ySpeed = 4;
            }
        }else if(ball.x <= leftPlayer.x + paddleWidth && ball.y + 8 >= leftPlayer.y && ball.y + 8 <= leftPlayer.y + paddleHeight){
            ball.xSpeed = -4;
            if(ball.y + 4 < leftPlayer.y + 10){
                ball.ySpeed = 4;
            }else if(ball.y + 4 < leftPlayer.y + 20 && ball.y + 4 >= leftPlayer.y + 10){
                ball.ySpeed = 3;
            }else if (ball.y + 4 < leftPlayer.y + 30 && ball.y + 4 >= leftPlayer.y + 20){
                ball.ySpeed = 2;
            }else if (ball.y + 4 < leftPlayer.y + 50 && ball.y + 4 >= leftPlayer.y + 30){
                ball.ySpeed = 0;
            }else if (ball.y + 4 < leftPlayer.y + 60 && ball.y + 4 >= leftPlayer.y + 50){
                ball.ySpeed = -2;
            }else if (ball.y + 4 < leftPlayer.y + 70 && ball.y + 4 >= leftPlayer.y + 60){
                ball.ySpeed = -3;
            }else if (ball.y + 4 > leftPlayer.y + 70){
                ball.ySpeed = -4;
            }
        }else if(ball.x + 8 >= rightPlayer.x && ball.y + 8 >= rightPlayer.y && ball.y + 8 <= rightPlayer.y + paddleHeight){
            ball.xSpeed = 4;
            //ball.ySpeed *= -1;
            if(ball.y + 4 < rightPlayer.y + 10){
                ball.ySpeed = 4;
            }else if(ball.y + 4 < rightPlayer.y + 20 && ball.y + 4 >= rightPlayer.y + 10){
                ball.ySpeed = 3;
            }else if (ball.y + 4 < rightPlayer.y + 30 && ball.y + 4 >= rightPlayer.y + 20){
                ball.ySpeed = 2;
            }else if (ball.y + 4 < rightPlayer.y + 50 && ball.y + 4 >= rightPlayer.y + 30){
                ball.ySpeed = 0;
            }else if (ball.y + 4 < rightPlayer.y + 60 && ball.y + 4 >= rightPlayer.y + 50){
                ball.ySpeed = -2;
            }else if (ball.y + 4 < rightPlayer.y + 70 && ball.y + 4 >= rightPlayer.y + 60){
                ball.ySpeed = -3;
            }else if (ball.y + 4 > rightPlayer.y + 70){
                ball.ySpeed = -4;
            }
        }else if(ball.y <= 0 || ball.y >= 600){
            ball.ySpeed *= -1;
        }else{
            return;
        }
        
    }






















