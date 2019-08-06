const gravity = 0.1;
const velRedFac = 0.5;
// initial potion of the ball:
let interval;
class Ball{

    constructor(id,x){
        this.id = id;
        this.x = x;
        this.y = 200;
        this.vx = 0;
        this.vy = 0;
        this.radius = 50;
    };

    getId = () => {
        return document.getElementById(this.id);
    };


    doIt = () => {
    // update velocity
        let width = 1300;
        let height = 700;
        this.vy += gravity; // gravity
        // update position
        this.x += this.vx;
        this.y += this.vy; 

        this.getId().setAttribute("cx",this.x);
        this.getId().setAttribute("cy",this.y);

        
        if (this.y > height - this.radius) {
        
            this.y = height - this.radius;
            this.vy *= -velRedFac;
        };
        
        // wrap around
        if (this.x > width + this.radius){
        
            this.x = -this.radius;
        };
        
    }; 

    pause = () => {
        clearInterval(interval);
    };
};




createThem = () => {
    let num = parseInt(document.getElementById("numberBox").value);
    makeBalls(num);
};



let balls = [];
makeBalls = (number) => { 
    for (let i = 0; i < number; i++) {
        const screen = document.getElementById("container");
        let x = 0;
        x = i*25;
        let cur_id = "ball" + i;
        let b = new Ball(cur_id,x);
        balls.push(b);
        let svg = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        svg.setAttribute("cx", "200");
        svg.setAttribute("cy", "200");
        svg.setAttribute("r", "50");
        svg.setAttribute("fill", getRandomColor());
        svg.setAttribute("id",cur_id)
        screen.appendChild(svg);
    };
};

dropBalls = () => {
    interval = setInterval(dropBall, 1000/60);
};

dropBall = () => {
    for (let z = 0; z < balls.length;z++){
        balls[z].doIt();
    };
};

pauseBalls = () => {
    for (let l = 0; l < balls.length ;l++){
        balls[l].pause();
    };
};

getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

