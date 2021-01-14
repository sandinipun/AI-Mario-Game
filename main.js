img = "";
noseY = 0;
noseY = 0;
marioX = 325;
marioY = 325;
Game_Status = "";

function preload() {
	img = loadImage("mario.jpg");
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	video = createCapture(VIDEO);
	video.size(800,400);
	
	canvas.parent('canvas');
	instializeInSetup(mario);
    video.parent('game_console');
}
function gotPoses(results){
	if(results.length > 0){
		noseY = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("nose x ="+noseX+"nose y ="+noseY);
	}


}
function modelLoaded(){
	console.log("model loaded !");
}

function draw() {
	background("#ff0000");
	if(noseY < 300){
		marioX = marioX-1;
	}
	if(noseY > 300){
		marioX = marioX+1;
	}
	if(noseY < 150){
		marioY = marioY-1;
	}
	if(noseY > 150){
		marioY = marioY+1;
	}
	
	image(img,marioX,marioY,40,70);
	game();
}
function game(){
	console.log("nose x ="+noseX + "nose y = "+noseY);
}
function startGame()
{
	Game_Status = "start";
	document.getElementById("status").innerHTML = "Game is loading";
}