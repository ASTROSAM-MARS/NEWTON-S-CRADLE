class rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1,
      length: 220
    }
    this.pointB = pointB;
    this.Rope = Constraint.create(options);
    World.add(world, this.Rope);
  }

  display() {
      var A = this.Rope.bodyA.position;
      var B = this.pointB;
      line(B.x, B.y, A.x, A.y);
  }
}
