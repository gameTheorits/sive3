class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.01,
          'friction':3.0,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(223,241,237);
      fill(192,198,197);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };