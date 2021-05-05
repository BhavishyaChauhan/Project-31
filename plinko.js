class plinko{
    constructor(x,y){
        var options={
            restitution:1,
            isStatic: true
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("white")
        ellipse(0,0,20,20)
        pop()
    }
}