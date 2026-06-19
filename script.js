let alarmTime = "";
let alarmPeriod = "";
let soundPlaying = false;

function setAlarm() {

    alarmTime = document.getElementById("alarmTime").value;
    alarmPeriod = document.getElementById("ampm").value;

    document.getElementById("message").innerHTML =
        "⏰ Alarm Set for " + alarmTime + " " + alarmPeriod;
}

function stopAlarm() {

    let sound = document.getElementById("alarmSound");

    sound.pause();
    sound.currentTime = 0;

    soundPlaying = false;

    document.getElementById("message").innerHTML =
        "Alarm Stopped";
}

setInterval(() => {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let period = hours >= 12 ? "PM" : "AM";

    let displayHours = hours % 12;

    if (displayHours === 0) {
        displayHours = 12;
    }

    document.getElementById("currentTime").innerHTML =
        String(displayHours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") +
        " " + period;

    let currentTime =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0");

    if (
        currentTime === alarmTime &&
        period === alarmPeriod &&
        alarmTime !== ""
    ) {

        document.getElementById("message").innerHTML =
            "🔔 WAKE UP! ALARM RINGING 🔔";

        let sound = document.getElementById("alarmSound");

        if (!soundPlaying) {
            sound.play();
            soundPlaying = true;
        }

        alert("Wake Up!");

        stopAlarm();

        alarmTime = "";
    }

}, 1000); 
