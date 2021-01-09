function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(400, 395);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);

    
    fill(0, 128, 0 );
    stroke(0, 128, 0 );
    rect(90, 40, 460, 20);

   
    fill(0, 128, 0 );
    stroke(0, 128, 0 );
    rect(90, 420, 460, 20);


fill(0, 128, 0 );
    stroke(0, 128, 0 );
    rect(90, 420, 460, 20);

}

function take_snapshot(){
    save("my_pic.png");
}
function filtercolor(){
    tint_color=document.getElementById("tintcolor").value;
}
