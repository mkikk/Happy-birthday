class Firework {
    constructor(x,y, natural) {
        this.exploded = false; // Has the firework reached it's peak yet
        this.particles = []; // Particles caused by firework explosion
        this.color = random(255); // firework color
        this.natural = natural; // mouse pressed or automatic
        if (this.natural) {
            this.firework = new Particles(x, y, this.color, true);
        }
        else {
            this.firework = new Particles(x, y, this.color);
            this.explode();
        }
    }

    update() {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.vel.y > 0) {
                this.exploded = true;
                this.explode();
            } 
        }
        for (let i = this.particles.length - 1; i >= 0 ; i--) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i,1);
            }
        }

    }

    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }

    explode() {
        if (this.color < 255/1.3)
            for (let i = 0; i < 130; i++) {
                let p = new Particles(this.firework.pos.x,this.firework.pos.y, this.color);
                this.particles.push(p);
            }
        else {
            for (let i = 0; i < 100; i++) {
                let p = new Particles(this.firework.pos.x,this.firework.pos.y, random(255));
                this.particles.push(p);
            }
        }
    }

    done() {
        return (this.exploded && this.particles.length === 0);
    }

    
    clicked() {
        this.explode();
     }
}