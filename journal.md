# Lab Three

## Task One - quad
This task was simple as I had already learned to do what this task 
required of me.

Creating the canvas and disabling stroke was done in the setup function:
```javascript
function setup() {
    // create the canvas
    createCanvas(500, 500);
    // turn off stroke
    noStroke();
}
```
All that was left to do after that was to create the draw function 
and use it to create a background colour. Then set postion '0, 0' to 
the center of the canvas, set the required rotation and create a quad.

This is the first time I've made a quad but I've had experience using 
the triangle, both use x,y co-ordinates for each corner resulting in 
the eight arguments for this quad.

```javascript
function draw() {
    // colour background
    background("orange");
    // move to center
    translate(width/2, height/2);
    // rotate shape
    rotate(degrees(35));
    // create quad
    quad(-10, -10, 10, -10, 10, 10, -10, 10);
}
```

## Task Two - rectangle
Similar to the first task however this time using stroke which I had 
not used before, so I learned to use the 'stroke()' and 
'strokeWeight()' functions. I also learned of the 'rectMode()' 
function which controlls whether a rectangles origin is at one of 
it's corners or at it's center.
The three options being (as explained in (Reference | RectMode(), n.d.)):
* rectMode(CORNER), which interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

* rectMode(CORNERS) interprets the first two parameters as the location of one of the corner, and the third and fourth parameters as the location of the diagonally opposite corner. Note, the rectangle is drawn between the coordinates, so it is not neccesary that the first corner be the upper left corner.

* rectMode(CENTER) interprets the first two parameters as the shape's center point, while the third and fourth parameters are its width and height.

* rectMode(RADIUS) also uses the first two parameters as the shape's center point, but uses the third and fourth parameters to specify half of the shapes's width and height respectively.

This parameter must be written in ALL CAPS in order to work.

```javascript
function draw() {
    // set rectMode to center
    rectMode(CENTER);
    // set background colour
    background("orange");
    // move to center
    translate(width/2, height/2);
    // define stroke colour
    stroke(255, 0, 0);
    // define stroke weight
    strokeWeight(4);
    // create rectangle
    rect(0, 0, 20, 20, 4);
}
```
Finally this task also taught me how to round the edges of a 
rectangle. After the first four arguments, the next four control the 
curve of each corner; undefined corners inherit the curve of those 
that have been defined. Hence the fifth argument '4' applies to all 
corners.

## Task Three - cylinder & ellipsoid
Other than learning to use 3D shapes in p5 not much else was new to 
me in this exercise. I learned that for 3D shape you need to include 
'WEBGL' in the 'createCanvas()' parameters. In 'setup' you need to 
set a 'frameRate', and finally all you need to do is setup the 3D 
shapes.

```javascript

// Variable init
let h = 0.0;
let test = 20;

function setup() {
    // create a canvas
    createCanvas(500, 500, WEBGL);
    // set frame rate
    frameRate(60);
    // Set angle mode to degrees
    angleMode(DEGREES);
}

function draw() {
    // set background colour
    background("orange");
    // apply material
    normalMaterial();

    // define current height
    h = test*sin(2*frameCount-5)+test;

    // translate cylinder
    translate(0, -h/2);
    // create cylinder
    cylinder(25, h);

    
    // move elipsoid
    translate(0, -h/2-25);
    // rotate ellipsoid
    rotateY(frameCount*-5);
    // rotate ellipsoid on to side
    rotateX(90);
    // create ellipsoid
    ellipsoid(25, 50);

}
```

## Bibliography
Examples | p5.js. (n.d.). Retrieved 6 August 2020, from https://p5js.org/examples/

Reference | rectMode(). (n.d.). Retrieved 6 August 2020, from https://p5js.org/reference/#/p5/rectMode
