class Ball{
    
    constructor(X,Y){
        
        this.x = X/2-4;
        this.y = Y/2-4;
        this.ySpeed = 0;
        this.xSpeed = 4;
        
    }
    show(){
        rect(this.x,this.y,8,8);
        print(this.x,this.y);
        //this.move();
    }
    
    
}