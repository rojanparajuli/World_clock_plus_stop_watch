function showWorldTime() {
    let kathmanduOffset = 5.75; 
    let sydneyOffset = 11; 
    let newYorkOffset = -4;
    let delhiOffset = 5.5;

    document.getElementById("kathmanduClock").innerHTML = formatTime(getTimeWithOffset(kathmanduOffset));
    document.getElementById("sydneyClock").innerHTML = formatTime(getTimeWithOffset(sydneyOffset));
    document.getElementById("newYorkClock").innerHTML = formatTime(getTimeWithOffset(newYorkOffset));
    document.getElementById("delhiClock").innerHTML = formatTime(getTimeWithOffset(delhiOffset));
}

function getTimeWithOffset(offset) {
    let utc = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
    return new Date(utc + offset * 3600000);
}

function formatTime(time) {
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour === 0) {
        hour = 12;
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return `${hour}:${min}:${sec} ${am_pm}`;
}

setInterval(showWorldTime, 1000);
showWorldTime();

let stopwatchInterval;
let elapsedTime = 0;
let isRunning = false;
const stopwatchDisplay = document.getElementById("stopwatch");
const startPauseButton = document.getElementById("startPause");

function updateStopwatch() {
    elapsedTime++;
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    stopwatchDisplay.innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

startPauseButton.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        startPauseButton.innerHTML = "Start";
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        startPauseButton.innerHTML = "Pause";
    }
    isRunning = !isRunning;
});
