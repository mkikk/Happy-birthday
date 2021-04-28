class Particles {

    constructor(x,y, color, firework) {
        this.pos = createVector(x, y);
        this.firework = firework;
        this.color = color;
        if (firework) {
            this.vel = createVector(random(-2,2),random(-23,-12));
            
        } 
        else {
            this.lifespan = 255;
            this.vel = p5.Vector.random2D();
            this.vel.mult(random(random(-15,-4.5),random(4.5,15)));
        }
        this.acc = createVector(0,0);
    }
    
    done() {
        return this.lifespan < 0;
    }

    applyForce(force) {
        this.acc.add(force);
    }
  
    update() {
        if (!this.firework) {
            this.vel.mult(0.95);
            this.lifespan-= 3;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }
  
    show(){
        colorMode(HSB);
        if (!this.firework) {
            strokeWeight(3);
            stroke(this.color, 255,255, this.lifespan / 255);
        } else {
            strokeWeight(5);
            stroke(this.color,255,255);
        }
        point(this.pos.x, this.pos.y);
    }
  }
  