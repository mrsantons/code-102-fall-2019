function setup() {
createCanvas (640, 480);

}
function draw() {

fill (0,255,0);
rect (320, 240, 20, 20); // draws a rectangle at x,y (320,240) with size w,h (20,20)

stroke (0,0,255);
strokeWeight(3)
line (0,40,640,40); // draws line starting at x,y (0,40) ending at x,y (640,40)

noStroke();
fill (255, 0,0);
circle(500,100,20);
}