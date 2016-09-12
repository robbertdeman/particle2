var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var particles = [];

class Particle {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.x = c.width/2
        this.y = 40;
        this.xSpeed = (Math.random()*6)-3;
        this.ySpeed = 0.2;
        this.gravity = -0.8;

        this.age = 0;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.ySpeed += 0.2;
        this.y += this.ySpeed;
        this.x += this.xSpeed;
        if (this.y >= c.height-this.height) {
            this.y = c.height-this.height;
            this.ySpeed *= this.gravity;
        }
    }
}

function loop() {
    ctx.clearRect(0,0,c.width,c.height);

    particles.push(new Particle());

    console.log(particles.length)

    particles.forEach(function(p) {
        p.draw();
        p.move();
    });

    window.requestAnimationFrame(loop);
}

loop();