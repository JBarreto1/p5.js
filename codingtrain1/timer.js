var x = 0;
var timer;
var counter = 0;
var interval;
var button;
var onOff = 0;
var timer2 = 0;


function setup(){
    createCanvas(200,200);
    timer = createP('timer')
    timer2 = createP('timer 2')
    button = createButton('start timer');
    button.mousePressed(Timer)
    
    // if (onOff == 0){
    //     button.mousePressed(startTimer)
    // } else {
    //     button.mousePressed(stopTimer)
    // }
}

function Timer(){
    if (onOff == 0){
        interval = setInterval(timeIt,500)
        button.html('stop timer')
        onOff = 1;
    }else{
        clearInterval(interval)
        button.html('start timer')
        onOff = 0;
    }
}

// function stopTimer(){
//     clearInterval(interval)
//     onOff = 0;
// }

function timeIt(){
    timer.html(counter)
    counter +=1;
}

function draw(){
    //timer.html(frameCount)
    background(51);
    stroke(255)
    line(x,0,x,height);
    x = x +3;
    if(x > width){
        x = 0;
    }
}