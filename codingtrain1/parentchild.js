var stuff = ['things','dragons','popsicles'];
var but;
var i = 0;

function setup(){
    noCanvas();
    //var canvas = createCanvas(400,400);
    //canvas.parent('b');
    but = select('#button');
    but.mousePressed(addIt);
}

function addIt(){
    var s = createElement('li',stuff[i]);
    s.parent('list');
    i++;
    if (i>stuff.length-1){
        i = 0;
    }
}

// function draw(){
//     background(0);
//     ellipse(200,random(200),random(100),random(10));
// }