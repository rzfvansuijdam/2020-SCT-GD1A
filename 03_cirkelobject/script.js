// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

console.log(getrandomnumber(200));

function getrandomnumber(max){
  return math.floor(math.random()*max);
}


context.beginpath()
context.fillstyle = "red";
context.arc(getrandomnumber(width),getrandomnumber(height),20,0,pi*2);
context.stroke();
context.fill();
context.closepath();


function animate(){
  drawcircle();
}

set interval(animate,100);
