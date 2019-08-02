
// initial potion of the ball:
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
canvas.style.backgroundColor = "rgb(109, 61, 61)";

    // gravity, velocity reduction after bounce, radius, color
let gravity;
let velRedFac;
let radius;
let x;
let y;
let vx;
let vy;
let interval; 
let color;
window.onload = initialize();

function initialize(){
        // gravity, velocity reduction after bounce, radius, color
    gravity;
    velRedFac = 0.5;
    radius = 20;
    x = 400;
    y = 100;
    vx = 0;
    vy = 0;
    interval; 
    color = getRandomColor();
    with (context){
        clearRect(0, 0, canvas.width, canvas.height);
    };  
}
function reset(){
    clearInterval(interval);
    initialize();
    x = 400;
    y = 100;
    vx = 0;
    vy = 0;
    gravity = 0
}

// interval to trigger velocity update
function init() {
    // set up a timer
    gravity = 0.03
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
    };
    // wrap around
    if (x > canvas.width + radius){
    
        x = canvas.offsetLeft;
    };
    if (x < canvas.offsetLeft){

        x = canvas.width;
    };
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

canvas.addEventListener('click', moveBall, false);

function moveBall() {
    if (gravity > 0){
        let canvasX = event.clientX - canvas.offsetLeft;
        let canvasY = event.clientY - canvas.offsetTop;
        let xs = canvasX - x
        let ys = canvasY - y
        let dis = Math.sqrt(xs*xs + ys*ys);
        vx += xs/5
        vy += ys/10
        init();
    }
};

function pause(){
    gravity = 0;
    clearInterval(interval);
    x = x;
    y = y;
    vx = 0;
    vy = 0;
}

function slowDown(){
    vx *= 0.5;
    vy *= 0.5;
}
