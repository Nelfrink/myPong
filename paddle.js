
class Paddle {
    
    constructor(x,y,pWidth,pHeight){
        this.x = x;
        this.y = y;
        this.width = pWidth;
        this.height = pHeight;
        this.speed = 6;
        
    }
    
    show(){
        fill(255);
        rect(this.x,this.y,this.width,this.height);
    }
    
    up(){
        this.y-=this.speed;
    }
    
    down(){
        this.y+=this.speed;
    }
}