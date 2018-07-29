var canvas
var el
var x = 100;
var bcolor = 100;
var nameInput;
var txt;

function setup() {
	canvas = createCanvas(200, 200);
	el = createP("This is an interesting paragraph");
	//canvas.position(0,0);
	button1 = createButton("this button!!!");
	button = createButton("tcolor");
	button1.mousePressed(changeColor);
	nameInput = createInput('type this');

	nameInput.input(updateText);
	txt = createP('some text');

	txt.style("background-color","pink");
	

}

function updateText(){
	el.html(nameInput.value());
	//console.log(nameInput.value());
}

function changeColor(){
	bcolor = random(255);
	el.html("you pressed the mouse. Color is "+bcolor)
	bcolor = color(bcolor);
	//console.log("you pressed")
}

function colorPick(){
	txt.style("background-color","rgb(200,99,"+mouseX+")");
	txt.html("current mouseX = "+mouseX)
}


function draw() {
	//clear();

	background(bcolor);
	
	//txt.html("x pos: "+current.x+"     y pos: "+current.y);
	// fill(255,0,0);
	// rect(x,100,50,50)
	// el.html("the x position is "+x)
	// x = x + random(-5,5);
}