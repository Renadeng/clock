
// Get canvas
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

// Draw clock face
let radius = canvas.width/2*0.9;
ctx.translate(radius/0.9, radius/0.9);
drawClockFace(ctx, radius);

// Get current time
let currentTime = new Date();
let hour = currentTime.getHours()%12; // 24 hours transfer to 12 hours
let minute = currentTime.getMinutes();
let second = currentTime.getSeconds();

// Draw clock hands and time
drawClockHands(ctx, radius);

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

function drawClockHands(ctx, radius){
  setTimeout("drawClockHands()", 1000);
  // Draw hour hand
  ctx.moveTo(0,0);
  let angHour = hour * Math.PI / 6;
  ctx.rotate(angHour);
  ctx.lineTo(0,-radius*0.6);
  ctx.lineWidth=10;
  ctx.stroke();
  ctx.rotate(-angHour);

  // Draw minute hand
  ctx.moveTo(0,0);
  let angMinute = minute * Math.PI / 30;
  ctx.rotate(angMinute);
  ctx.lineTo(0,-radius*0.75);
  ctx.lineWidth=6;
  ctx.stroke();
  ctx.rotate(-angMinute);

  // Draw second hand
  ctx.moveTo(0,0);
  let angSecond = second * Math.PI / 30
  ctx.rotate(angSecond);
  ctx.lineTo(0, -radius*0.9);
  ctx.lineWidth=2;
  ctx.stroke();
  ctx.rotate(-angSecond);
}
