
var canvas;
var form;

function preload(){
	bg1 = loadImage("images/start.jpg");
}

function setup(){
	canvas = createCanvas(displayWidth-20,displayHeight-100);
	form = new Form();
}

function draw(){
	background(bg1);
	form.display();
}
