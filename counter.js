let max = 10;
let currentTime = 0;
let stopped = false;
function timeIt(action){
    switch(action){
    case "Start":
        stopped = false;
        document.getElementById("curTime").innerHTML = currentTime;
        setTimeout(count,0);
        break;
    case "Stop":
        alert("Current count is: " + currentTime + ". Press Start to continue timing or reset to start over.");
        stopped = true;
        break;
    case "Reset":
        currentTime = 0;
        document.getElementById("curTime").innerHTML = currentTime;
        stopped = true;
        break;
    }
}

function count(){
    if (!stopped){
        if(currentTime <= max) {
        document.getElementById("curTime").innerHTML = currentTime;
        currentTime++;
        setTimeout(count,1000);
        } else {
        alert("Too Long! Reset the clock.")
        timeIt("Reset");
        }
    }
}   
