// var imgs = [];
var song1;
var song2;

var angle = 0;

function preload(){
	// for (var i = 1; i < 41; i++){
	// var num = i < 10 ? '0' + i : i;
	// imgs[i-1] = loadImage('stick/stick'+num+'.png');
	// }
	song1 = loadSound('songs/rainbow1.mp3');
	// song2 = loadSound('randbow1.mp3');
}

function soundLoaded(song){
	song1 = song;
	song1.play();
	loading = false;
}

function rainbowSong(song, filename){
	loadSound(filename, soundLoaded);
	function soundLoaded(sound){
		console.log(filename);
		song = sound;
		song.play();
	}
}
	


function setup() {
	createCanvas(300, 300);
	console.log(floor(millis()) + ' milliseconds');

	rainbowSong(song1, 'songs/rainbow1.mp3')
	rainbowSong(song2, 'songs/rainbow1.mp3')

	// song1 = loadSound('songs/rainbow1.mp3', soundLoaded);
	// song2 = loadSound('songs/rainbow1.mp3', soundLoaded);
}

function draw() {
	background(51);

	translate(width/2, height/2);
	rotate(angle);
	strokeWeight(4);
	stroke(255);
	line(0,0,100,0);
	angle += 0.1;

}