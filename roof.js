class roof{
    constructor(){
        var options = {
            isStatic : true
        }
        this.Roof = Bodies.rectangle(390,150,200,30,options);
        World.add(world, this.Roof);
    }
    display(){
        var posi = this.Roof.position;
        rectMode(CENTER);
        fill("silver");
        rect(posi.x, posi.y,200, 30);
    }
}