// Get canvas ready
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// Get canvas parameter
let radius = canvas.width/2;

// Move canvas origin (0,0) to the center of the canvas
ctx.translate(radius, radius);

// Reset radius, considering the edge of the clock
radius *= 0.9;

// let img = new Image();
// // let imgLoaded = false;
// // img.onload = function(){
// //   imgLoaded = true;
// // }
// img.src = "images/ClockFace.png";
// context.drawImage(img, 0, 0, canvas.width, canvas.height);

// Draw clock face



function drawClockFace(ctx, radius){
  // Draw outside
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.lineWidth=20;
  ctx.stroke();
  ctx.fillStyle="white";
  ctx.fill();
  // Draw central
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.01, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle="black";
  ctx.fill();
}

function drawHand(ang, len, width) {
  ctx.moveTo(0,0);
  ctx.rotate(ang);
  ctx.lineTo(0,-radius*len);
  ctx.lineWidth=width;
  ctx.stroke();
  ctx.rotate(-ang);
}

function drawClockHands(ctx, radius){
  // Get current time
  let currentTime = new Date();
  let hour = currentTime.getHours()%12; // 24 hours transfer to 12 hours
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  // console.log(hour, minute, second);

  // Calculate degress to rotate
  degHour = (hour + (minute / 60) + (second / 3600) ) / 12 * 360;
  let angHour = degHour * Math.PI / 180
  degMinute = ( minute + (second / 60 )) / 60 * 360;
  let angMinute = degMinute * Math.PI / 180
  degSecond = second / 60 * 360;
  let angSecond = degSecond * Math.PI / 180

  // Draw hour hand
  drawHand(angHour, 0.6, 10);

  // Draw minute hand
  drawHand(angMinute, 0.75, 6);

  // Draw second hand
  drawHand(angSecond, 0.9, 2);
}

function drawClock() {
  drawClockFace(ctx, radius);
  drawClockHands(ctx, radius);
  setInterval("drawClock()", 1000);
}

drawClock();


// function clockApp() {
//   drawClock();
//   setInterval('drawClock()', 1000);
// }
//
// clockApp();
