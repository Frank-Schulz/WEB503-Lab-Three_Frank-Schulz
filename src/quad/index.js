function setup() {
    createCanvas(500, 500);
}

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