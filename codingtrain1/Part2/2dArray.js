var cols = 10;
var rows = 10;

var colors = [];

function setup(){
    createCanvas(300,300);
    for (var i = 0; i < cols; i++){
        colors[i] = [];
        for (var j =0; j < rows; j++){
            colors[i][j] = random(255);
        }}
}

function draw(){
    background(51)
    for (var i = 0; i < cols; i++){
        for (var j =0; j < rows; j++){
            
            var x = i * 30;
            var y = j * 30;
            stroke(0);
            fill(colors[i][j])
            rect(x,y,30,30);
        }
    }
}