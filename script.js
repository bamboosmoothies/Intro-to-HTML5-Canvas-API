//use canvas by intializing and declaring
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

/* IF you want to go up... Negative
IF you want to go down... Positive */

/* set width by pixel */
// canvas.width = 200;
/*set width according to window screen width */
// canvas.width = window.innerWidth

/* 
    draw a fill rectangle 
    fillstyle changes color properties
*/
// ctx.fillStyle = "red";
// ctx.fillRect(x, y, width, height)
// ctx.fillRect(20, 20, 150, 100);

/* The location of the rectangle are all accordance to the x-y plane  */

/* fill style with two different rectangle */
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.fillStyle = "blue";
// ctx.fillRect(200, 20, 150, 100);

/* 
    outline of the rectangle 
    linewidth changes the length of the line/borders
    strokeRect is similiar to fillRect; essentially an outline
    strokeStyle changes the color properties 
*/
// ctx.lineWidth = 5;
// ctx.strokeStyle = "green";
// ctx.strokeRect(100, 200, 150, 100);

/* 
    clearRect = clear
*/
// ctx.fillStyle = "red";
// ctx.fillRect(20, 20, 150, 100);
// ctx.clearRect(25, 25, 140, 90);

/* 
    TEXT
*/
// ctx.font = "30px Arial";
// ctx.fillStyle = "purple";
// ctx.fillText("Dookie", 400, 50);

// ctx.strokeText("Dookie", 400, 100);

/* 
    Paths = starting point
    moveTo = moves to designated coordinates 
    lineTo = straight line
    stroke = draw line
    closePath = draw a line straight from the beginning 
    Example is a triangle
*/
// ctx.beginPath();
// // ctx.moveTo(x, y);
// ctx.moveTo(50, 50);
// //horizontal line -
// ctx.lineTo(150, 50);
// // "/"
// ctx.lineTo(100, 200);
// // "\"
// ctx.lineTo(50, 50);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "orange";
// ctx.fill();

/* arc = circle  */
// ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle);
// ctx.arc(100, 100, 40, 0, Math.PI * 2);
// ctx.stroke();

/* 
    arc circle with variables
    Creating a smiley face
    IF you want to go up... Negative
    IF you want to go down... Positive
*/
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
ctx.beginPath();
// draw head
ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
// Move to mouth
ctx.moveTo(centerX + 100, centerY);
// Draw mouth | false = clockwise
ctx.arc(centerX, centerY, 100, 0, Math.PI, false);
// Move to left eye
ctx.moveTo(centerX - 60, centerY - 80);
// Draw left eye
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
// Move to right eye
ctx.moveTo(centerX + 100, centerY - 80);
// Draw right eye
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);

ctx.stroke();
