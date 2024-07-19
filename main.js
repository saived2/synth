loves=0;
green=0;

function preload() {
    song = loadSound("loveit.mp3")
    song = loadSound("greennoise.mp3")
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}