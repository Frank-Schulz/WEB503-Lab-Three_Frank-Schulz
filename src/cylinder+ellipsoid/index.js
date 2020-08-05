function setup() {
    // create a canvas
    createCanvas(500, 500, WEBGL);
}

function draw() {
    // set background colour
    background("orange");
    // move to center
    translate(width/2, height/2);
    normalMaterial();
    cylinder(50, 50);
}