class Paper
{
    constructor(x,y,r)
    {
        var options={
            //isStatic:false,
            restitution:0.3,
            //friction:0.9,
            density:1.2
        }

        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body);
    }
    display()
    {
        var paperpos=this.body.position;

       // push()
       // translate(paperpos.x,paperpos.y);
       ellipseMode(RADIUS);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(paperpos.x,paperpos.y,this.r,this.r)
       // pop()
    }
}
