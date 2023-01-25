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
}

function draw(){
    image(video, 0, 0, 600, 350);
}