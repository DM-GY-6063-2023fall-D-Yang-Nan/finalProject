<<<<<<< HEAD

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
I already have a relatively simple firework effect, but it might be quite ordinary? In the future, consider changing the shape of the fireworks particles, the characteristics of the explosion, or adding some other elements and backgrounds. Do you have any good ideas? Please let me know!
Sensors:
There is no connection with sensors yet. I like the idea of controlling the direction of the fireworks with gestures, and controlling the color of the fireworks with an RGB color card. This is also a part that needs to be completed later.

# p5js + Arduino
I was going to use the APDS9960 sensor to control the direction of the fireworks with gestures, but since my sensor hasn't arrived yet this week, I used two buttons to test it out, using two buttons to control the direction of the circle moving in p5js. The circle moves left when the left button is pressed and right when the right button is pressed. I used the wifi template. Next week I will gradually replace the buttons with APDS9960 sensors and the fireworks rising direction with the circle moving direction.
![GgNpdl.jpg](https://imgpile.com/images/GgNpdl.jpg)

# Senor
The APDS-9960 is a multipurpose sensor that can be used for Ambient Light, RGB Sensing, Proximity Sensing, and Gesture Detection. It has been used in Samsung’s Galaxy S5 earlier and is used in many mobile phones as a proximity sensor. It is also used in gesture robotics because of its advanced gesture detection technique enabling it to detect the gesture very accurately and with a very high speed.
![GgNZgF.png](https://imgpile.com/images/GgNZgF.png)

# System diagram & Circuit diagram
![GgNykk.jpg](https://imgpile.com/images/GgNykk.jpg)
![GgUnnM.png](https://imgpile.com/images/GgUnnM.png)

# Plan for user testing
I'm going to get several people to control my fireworks with gestures and colors and see what each one suggests differently

# discussion
Fireworks are being banned in more and more places due to air pollution, environmental and safety concerns. But fireworks do have a lot of joy that can't be replaced by other things, and it can express the joy of the festival. I don't want fireworks to disappear, on the contrary, is there a more environmentally friendly and innovative way to replace the traditional fireworks? This is something I've always wanted to explore.









=======

