// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

// lolz
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;


context.beginPath()
context.fillStyle = "grey";
context.moveTo(700,200);
context.lineTo(600,400);
context.lineTo(800,300);
context.closePath();
context.stroke();
context.fill()

context.beginPath()
context.fillStyle = "red";
context.moveTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.lineTo(300,100);
context.closePath();
context.stroke();
context.fill()

context.beginPath()
context.fillStyle = "#A0A0A0";
context.moveTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.lineTo(200,500);
context.closePath();
context.stroke();
context.fill()

context.beginPath()
context.fillStyle = "grey";
context.moveTo(600,400);
context.lineTo(600,600);
context.lineTo(800,500);
context.lineTo(800,300);
context.closePath();
context.stroke();
context.fill()
