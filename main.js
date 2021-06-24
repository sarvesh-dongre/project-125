diference = 0;
left_wrist_x = 0;
right_wrist_x = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
    canvas.position(550, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
}


function draw() {
    background("#969A97");
    fill("#F90093");
    stroke("#F90093");
    text("SARVESH", 250, 275);
}


function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + left_wrist_x + ", Right Wrist X = " + right_wrist_x);
        difference = floor(left_wrist_x - right_wrist_x);
        textSize(difference);

        console.log("Left Wrist X = " + left_wrist_x + ", Right Wrist X = " + right_wrist_x + ", Difference = " + difference);
    }
}


function modelLoaded() {
    console.log("Model Loaded!");
}