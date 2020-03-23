class Particle {
    constructor(x,y,r) {
      var options = {
          friction:0,
          restitution: 1.0,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill(71,67,67);
    ellipse(pos.x, pos.y, this.r);
    }
  };