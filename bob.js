class Bob {
    constructor(x, y) {
      var options = {
          
        restitution:1, 
        friction:0,
         density:0.8

      }
      this.body = Bodies.circle(x, y, 27, options);
      this.radius = 27;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, 27, 27);
      pop();
    }
  };