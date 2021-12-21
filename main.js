var handright = 0;
var handleft = 0;
var difference = 0;
var nosex = 0;
var nosey = 0;
function setup(){
    img = createCapture(VIDEO);
    img.size(500, 500);
    canvas = createCanvas(500, 380);
    canvas.position(510, 130);
    classifier = ml5.poseNet(img, modeLoaded);
    classifier.on('pose', gotPoses)
}
function draw(){
    background("#13d1a8");
    fill("#b07171");
    stroke("#b07171");
    text(nosex, nosey, difference);
    
}
function modeLoaded(){
    console.log("model is loaded");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        nosex = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;
        handright = result[0].pose.rightWrist.x;
        handleft = result[0].pose.leftWrist.x;
        difference = floor(handleft - handright);
    }

}