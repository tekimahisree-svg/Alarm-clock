let alarmTime = "";

function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    alert("Alarm Set for " + alarmTime);
}

setInterval(() => {
    let now = new Date();

    let currentTime =
        String(now.getHours()).padStart(2, '0') +
        ":" +
        String(now.getMinutes()).padStart(2, '0');

    if (currentTime === alarmTime) {
        document.getElementById("alarmSound").play();
        alert("Wake Up!");
    }
}, 1000);
