var msec = 0
var sec = 0
var min = 0
function timer(){
    if(msec <= 100){
    msec++;
    mili.innerHTML = msec
    }
    
    else if(msec >=100){
        msec = 0;
        sec++;
    secs.innerHTML = sec;
    }

    if(sec >= 59){
        sec = 0;
        min++;
    mins.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,10);
}
function stop(){
    clearInterval(interval)
}
function reset(){
    clearInterval(interval)
    msec = 0
    sec = 0
    min = 0
    mili.innerHTML = msec
    secs.innerHTML = sec;
    mins.innerHTML = min;
}

