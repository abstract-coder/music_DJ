right_x = 0;
right_y = 0;
left_x = 0;
left_y = 0;
song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600, 350);
canvas.position(470, 280);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded.");
}

function gotPoses(results){
    if(results.length > 0)
    {
      left_x = results[0].pose.leftWrist.x;
      left_y = results[0].pose.leftWrist.y;
      right_x = results[0].pose.rightWrist.x;
      right_y = results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 350);
}