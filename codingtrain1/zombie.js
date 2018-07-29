var slider=[];
var angle=0;

function setup(){
    //createCanvas(200,200);
    noCanvas()
    for (var i = 0; i < 500; i++){
        slider[i] = createSlider(0,255,50);
    }
}

function draw(){
    var offset=0;
    for (var i = 0; i < 500; i++){
        var x =map(sin(angle+offset),-1,1,0,255);
        slider[i].value(x);
        offset+=.025
    }
    
    
    //background(slider.value());
    angle+=0.4; 
}