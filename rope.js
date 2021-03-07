class rope{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY

        var op={
            bodyA:body1,
            bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(op);
        World.add(world, this.rope);    
    }
        display(){
        var point1= this.rope.bodyA.position
        var point2= this.rope.bodyB.position
        strokeWeight(2)

var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointB+this.offsetX
var Anchor2Y=pointB+this.offsetY
//line(pointA.x,pointA.y,pointB.x,pointB.y)
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)        
        }    
}