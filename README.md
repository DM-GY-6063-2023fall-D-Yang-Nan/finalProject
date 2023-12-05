# Visual Effects
In this section, I attempted the creation of visual effects for fireworks.

In the part without sensors, I want to first create a fireworks animation using p5.js. The animation should respond to the user's mouse clicks, launching fireworks, and displaying particles of different colors and shapes.

Key Features
· Fireworks launch at the mouse click location. If the mouse clicks on the left side of the screen, the firework moves left, and vice versa. (This will be convenient to change to sensor control later.)
· Fireworks explode after rising to a certain height, producing particles of rich colors.
· Particles gradually disappear over time.

# Pseudocode
Define color configurations
Define physical parameters: maximum horizontal velocity, gravity acceleration

Define Particle class:
Constructor: Initialize position, color, size, velocity, lifespan
Draw method: Draw particle on canvas
Move method: Update particle position and lifespan

Define Firework Ball class (inherits from Particle class):
Constructor: Initialize firework ball
Move method: Rewrite the movement logic, trigger explosion
Explosion method: Generate multiple particles

Initialize particle and fireworks lists

Setup function:
Create canvas
Set background and drawing styles

Draw function:
Draw background
Update and draw all particles and fireworks
Remove inactive particles and fireworks

Mouse click event handling:
Create new fireworks based on mouse position
function mousePressed() {
  let distanceToCenter = mouseX - windowWidth / 2;
  let vx = distanceToCenter / windowWidth * maxVx * 6;

  fireworks.push(new FireWorkBall(
      windowWidth / 2,
      windowHeight,
      colors.fireworks[Math.floor(random() * colors.fireworks.length)],
      10,
      vx,
  ));
}

# Future Plans
Visual Effects:
I already have a relatively simple firework effect, but it might be quite ordinary? In the future, consider changing the shape of the fireworks particles, the characteristics of the explosion, or adding some other elements and backgrounds. Do 