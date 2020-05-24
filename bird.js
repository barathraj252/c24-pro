class Bird {
    constructor(x,y){
     var  bird_options={
        restitution:0.5,
        friction:1,
        density:1.5

     }
     this.body = Bodies.rectangle(x,y,50,50,bird_options);
     this.width=50;
     this.height=50;
     World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push()
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        stroke("blue");
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}