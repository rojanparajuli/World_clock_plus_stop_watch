function updateCityClock(city, offset) {
    let now = new Date();
    let utc = now.getTime() + now.getTimezoneOffset() * 60000;
    let localTime = new Date(utc + offset * 3600000);

    let hour = localTime.getHours() % 12;
    let minute = localTime.getMinutes();
    let second = localTime.getSeconds();

    let hourDegree = (hour * 30) + (minute * 0.5);
    let minuteDegree = minute * 6;
    let secondDegree = second * 6;

    document.getElementById(city + "Hour").style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
    document.getElementById(city + "Minute").style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    document.getElementById(city + "Second").style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;

    document.getElementById(city + "Clock").innerHTML = formatTime(localTime);
}

function updateAllClocks() {
    updateCityClock("kathmandu", 5.75);
    updateCityClock("sydney", 11);
    updateCityClock("newYork", -4);
    updateCityClock("delhi", 5.5);
}

setInterval(updateAllClocks, 1000);
updateAllClocks();

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

    return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec} ${am_pm}`;
}

let stopwatchInterval, elapsedTime = 0, isRunning = false;
document.getElementById("startPause").addEventListener("click", function () {
    if (isRunning) {
        clearInterval(stopwatchInterval);
        this.innerHTML = "Start";
    } else {
        stopwatchInterval = setInterval(() => {
            elapsedTime++;
            document.getElementById("stopwatch").innerHTML = new Date(elapsedTime * 1000).toISOString().substr(11, 8);
        }, 1000);
        this.innerHTML = "Pause";
    }
    isRunning = !isRunning;
});
