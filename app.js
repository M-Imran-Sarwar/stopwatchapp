var min = 0;
var sec = 0;
var msec = 0;
var msecRecord = document.getElementById("msec");
var secRecord = document.getElementById("sec");
var minRecord = document.getElementById("min");
var interval;



function timer() {
    msec++;
    msecRecord.innerHTML = msec
    if (msec >= 99) {
        sec++;
        secRecord.innerHTML = sec
        msec = 0;}
    else if (sec >= 60){
        min++;
        minRecord.innerHTML = min
        sec = 0;
        }

    if(msec < 10){
        msecRecord.innerHTML = "0" + msec.toString();}
    else{
        msecRecord.innerHTML = msec;}
    if(sec < 10){
        secRecord.innerHTML = "0" + sec.toString();}
    else{
        secRecord.innerHTML = sec;}
    if(min < 10){
        minRecord.innerHTML = "0" + min.toString();}
    else{
        minRecord.innerHTML = min;}
}


function start(){
    interval = setInterval (timer, 10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    clearInterval(interval);
    min = 0;
    sec = 0;
    msec = 0;
    minRecord.innerHTML = "00"
    secRecord.innerHTML = "00"
    msecRecord.innerHTML = "00"
}

