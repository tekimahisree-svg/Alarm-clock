let alarmTime = "";

function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;

    document.getElementById("message").innerHTML =
    "Alarm Set for " + alarmTime;
}

setInterval(() => {

    let now = new Date();

    let currentTime =
        String(now.getHours()).padStart(2, '0') +
        ":" +
        String(now.getMinutes()).padStart(2, '0');

    if (currentTime === alarmTime) {

        document.getElementById("message").innerHTML =
        "🔔 Wake Up! Alarm Ringing 🔔";

        let sound = document.getElementById("alarmSound");
        sound.play();

        alarmTime = "";
    }

}, 1000);

























