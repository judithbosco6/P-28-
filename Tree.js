   class Tree{
        constructor(x,y,width,height){
            var options={
                isStatic:true,
                restitution:0,
            }

            this.body=Matter.Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            this.image=loadImage("tree.png");
            Matter.World.add(world,this.body);
        } 
            
            display(){
                imageMode(CENTER);
                image(this.image,this.body.position.x,this.body.position.y,500,500);
            }
    }
    
