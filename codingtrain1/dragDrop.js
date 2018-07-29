// var dropz
// function setup(){
//     var canvas = createCanvas(200,200)
//     background(0)
//     canvas.drop(gotFile);
//     // dropz = select('#drop');
//     // dropz.dragOver(highlight);
//     // dropz.dragLeave(unhigh);
//     // dropz.drop(gotFile,unhigh);
// }

// function highlight(){
//     dropz.style('background-color','#ccc');
// }

// function unhigh(){
//     dropz.style('background-color','#fff');
// }

// function gotFile(file){
//     createP(file.name+ " " +file.size);
//     var img = createImg(file.data);
//     img.size(100,100);
//     image(img,0,0,200,200);
// }


var dropzone;
function setup() {
  createCanvas(200, 200);
  background(0);
  
  dropzone = select('#drop');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);
}

function gotFile(file) {
  createP(file.name + " " + file.size);
  var img = createImg(file.data);
  img.size(100, 100);
  
}

function highlight() {
  dropzone.style('background-color','#ccc');
}

function unhighlight() {
  dropzone.style('background-color','#fff');
}