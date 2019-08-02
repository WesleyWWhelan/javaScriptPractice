let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.style.backgroundColor = "yellow";
    // gravity, velocity reduction after bounce, radius, color
let gravity = 0.1;
let velRedFac = 0.8;
let radius = 20;
let x = 400;
let y = 100;
let vx = 0;
let vy = 0;
let interval; 
let color = '#0000F'

// initial potion of the ball:

window.onload = initialize();

function initialize(){
    with (context){
        clearRect(0, 0, canvas.width, canvas.height);
    };  
}
function reset(){
    clearInterval(interval);
    with (context){
        clearRect(0, 0, canvas.width, canvas.height);
    };  
    x = 400;
    y = 100;
    vx = 0;
    vy = 0;
}

// interval to trigger velocity update
function init() {
    // set up a timer
    interval = setInterval(update, 1000/60); // 60 frames per second
}
// time to update velocity time we call init
function update() {
// update velocity
    vy += gravity; // gravity
    
    // update position
    x += vx;
    y += vy; 
    
    // handle bouncing
    if (y > canvas.height - radius){
        
        y = canvas.height - radius;
        vy *= -velRedFac;
        color = getRandomColor()
    }
    
    // wrap around
    if (x > canvas.width + radius){
    
        x = -radius;
    }
    
    // update the ball
    drawBall();
};

function drawBall() {
    with (context){

        clearRect(0, 0, canvas.width, canvas.height); // clear canvas

        fillStyle = color; // same color

        beginPath();

        arc(x, y, radius, 0, 2*Math.PI, true); //drawing circle at specified location and radius

        closePath();

        fill();
    }
} 

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

