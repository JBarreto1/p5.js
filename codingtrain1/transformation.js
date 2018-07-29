let a = 0;
function setup(){
    createCanvas(400,400)
    angleMode(DEGREES)
}

function draw(){
    background(0);
    rotate(a)
    rect(50,50,100,300)
    a=a+1
}
