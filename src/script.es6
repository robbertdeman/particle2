var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x;
var y;

var particles = [];

const Particle = require("particle.class.es6");

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