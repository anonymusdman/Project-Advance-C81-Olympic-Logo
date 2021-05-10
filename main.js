var ctx;
var canvas = document.getElementById("Olympic_logo");
// var x_positions=[0, 20, 40, 60, 80];
// var y_positions=[-50, -80, -100, -120, -140];

var x_positions=[150, 180, 210, 240, 270];
var y_positions=[50, 95, 50, 95, 50];
var colors=["blue", "yellow", "black", "green", "red"];
function draw_olympic_logo(){
    ctx = document.getElementById("Olympic_logo").getContext("2d");
    ctx.lineWidth = 4;
    for (var i = 0; i < 5; i++) {
        ctx.beginPath();
        //ctx.moveTo(x_positions[i], y_positions[i]);
        ctx.arc(x_positions[i], y_positions[i], 40, 0, Math.PI * 2, false);
        ctx.strokeStyle=colors[i];
        ctx.stroke();
    }
}


window.onload = draw_olympic_logo;