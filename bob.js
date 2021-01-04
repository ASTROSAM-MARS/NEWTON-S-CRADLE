class bob {
  constructor(x) {
    var options = {
      restitution: 1,
      friction: 0,
     frictionAir: 0,
      inertia: Infinity
    }
    this.image = loadImage("METAL_BOB.png");
    this.body = Bodies.circle(x, 450, 15, options);
    World.add(world, this.body);
  }
  display() {
    var posi = this.body.position;
   imageMode(CENTER);
  image(this.image, posi.x, posi.y, 80,80);
  }
}
