class Ball{
    
    constructor(X,Y){
        
        this.x = X/2-4;
        this.y = Y/2-4;
        this.ySpeed = 0;
        this.xSpeed = 4;
        
    }
    
//    move(){
//        this.x -= this.xSpeed;
//        if(this.x <= -10){
//            this.x = canvasX/2-4;
//            this.y = canvasY/2-4;
//            this.xSpeed = 4;
//        }else if(this.x <= leftPlayer.x + paddleWidth && this.y >= leftStartingY && this.y <= leftStartingY + paddleHeight){
//            this.xSpeed = -4;
//        }else if(this.x + 8 >= rightPlayer.x && this.y >= rightStartingY && this.y <= rightStartingX + paddleHeight){
//            this.xSpeed = 4;
//        }else{
//            return;
//        }
//        
//    }
    show(){
        rect(this.x,this.y,8,8);
        print(this.x,this.y);
        //this.move();
    }
    
    
}