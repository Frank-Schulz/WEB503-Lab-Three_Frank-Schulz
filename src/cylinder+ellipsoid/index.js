
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