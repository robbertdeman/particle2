var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x;
var y;

var particles = [];

class Particle {
    constructor(x, y) {
        const size = Math.random()*20;
        this.width = size;
        this.height = size;
        this.x = x;
        this.y = y;
        this.xSpeed = (Math.random()*6)-3;
        this.ySpeed = 0.2;
        this.gravity = -0.8;
        this.isDead = false;
        this.colorRed = Math.floor(Math.random()*255);
        this.colorGreen = Math.floor(Math.random()*255);
        this.colorBlue = Math.floor(Math.random()*255);
        this.opacity = 1;
    }
    draw() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "rgba("+this.colorRed+", "+this.colorGreen+", "+this.colorBlue+", "+this.opacity+")";
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
    fadeAndDie() {
        this.opacity -= 0.005;
        if (this.opacity <= 0) {
            this.isDead = true;
        }
    }
}

function loop() {
    ctx.clearRect(0,0,c.width,c.height);

    particles.push(new Particle(x, y));

    particles.forEach(function(p) {
        p.draw();
        p.move();
        p.fadeAndDie();
    });

    particles = particles.filter (function(p) {
        return p.isDead == false;
    });

    c.addEventListener("mousemove", function(){
        x = event.clientX;
        y = event.clientY;
    });

    window.requestAnimationFrame(loop);
}

loop();