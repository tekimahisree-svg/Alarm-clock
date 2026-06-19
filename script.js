let alarmTime = "";
let alarmPeriod = "";

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

    document.getElementById("message").innerHTML =
        "Alarm Stopped";

    alarmTime = "";
}

setInterval(() => {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let displayHours = hours % 12;
    if (displayHours === 0) {
        displayHours = 12;
    }

    let currentPeriod = hours >= 12 ? "PM" : "AM";

    document.getElementById("currentTime").innerHTML =
        String(displayHours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") +
        " " + currentPeriod;

    if (alarmTime !== "") {

        let alarmHour = parseInt(alarmTime.split(":")[0]);
        let alarmMinute = alarmTime.split(":")[1];

        if (alarmPeriod === "PM" && alarmHour < 12) {
            alarmHour += 12;
        }

        if (alarmPeriod === "AM" && alarmHour === 12) {
            alarmHour = 0;
        }

        let alarm24 =
            String(alarmHour).padStart(2, "0") +
            ":" +
            alarmMinute;

        let currentTime =
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0");

        if (currentTime === alarm24) {

            document.getElementById("message").innerHTML =
                "🔔 WAKE UP! ALARM RINGING 🔔";

            let sound = document.getElementById("alarmSound");

            sound.currentTime = 0;
            sound.play();

            alarmTime = "";
        }
    }

}, 1000);
