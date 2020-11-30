class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:0.1,
        }
        
        this.body=Matter.Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("mango.png");
        Matter.World.add(world,this.body);
        }
        
        display(){
            push();
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.radius, this.radius);
            //ellipseMode(RADIUS);
            //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
            pop();
        }
}
