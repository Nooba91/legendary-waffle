song = "";
leftWristY = 0;

function preload(){
    song = loadSound("song.mp3");
}

function modelLoaded(){
    console.log("DA MODAL EEZ LODED");
}

function setup(){
    canvas = createCanvas(400, 350);
    canvas.position(450, 185);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 350);
}

function gotPoses(results){
    leftWristY = results[0].poses.leftWrist.y;
}