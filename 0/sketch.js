let colors = {
  bg: [30, 30, 30, 60],
  fireworks: [
      "#D94625",
      "#BF4E98",
      // 第三种颜色不使用
  ]
};

let maxVx = 1;
let g = 0.04;

class Particle {
  constructor(x, y, color, size, vx, vy, life) {
      this.active = true;
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.color = color;
      this.size = size;
      this.defaultSize = size;
      this.life = life;
      this.defaultLife = life;
  }

  draw() {
      push();
      fill(this.color);
      drawingContext.shadowBlur = 24;
      drawingContext.shadowColor = color(this.color);
      circle(this.x, this.y, this.size);
      pop();
  }

  move() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += g;

      if (this.life <= 0) {
          this.active = false;
      }
      this.size = this.defaultSize * this.life / this.defaultLife;

      this.life -= 1;
  }
}

class FireWorkBall extends Particle {
  constructor(x, y, color, size, vx = random(-maxVx, maxVx), vy = -random((windowHeight * g) ** 0.5, (windowHeight * g * 1.5) ** 0.5)) {
      super(x, y, color, size, vx, vy, 1);
  }

  move() {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += g;

      if (this.vy >= 0) {
          this.explode();
      }
  }

  explode() {
      for (let i = 0; i < 200; i++) {
          const vec = p5.Vector.random2D().mult(random(2, 5));
          const color = colors.fireworks[i % 2]; // 交替选择两种颜色
          particles.push(new Particle(
              this.x,
              this.y,
              color,
              15,
              vec.x,
              vec.y,
              random(60, 100) * random(0.7, 1.3)
          ));
      }
      this.active = false;
  }
}

let particles = [];
let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(...colors.bg);
  noStroke();
}

function draw() {
  background(...colors.bg);

  for (const particle of particles) {
      particle.draw();
      particle.move();
  }
  for (const firework of fireworks) {
      firework.draw();
      firework.move();
  }

  particles = particles.filter(p => p.active);
  fireworks = fireworks.filter(f => f.active);
}

function mousePressed() {
  let distanceToCenter = mouseX - windowWidth / 2;
  let vx = distanceToCenter / windowWidth * maxVx * 6;

  fireworks.push(new FireWorkBall(
      windowWidth / 2,
      windowHeight,
      colors.fireworks[Math.floor(random() * colors.fireworks.length)],
      7,
      vx,
  ));
}