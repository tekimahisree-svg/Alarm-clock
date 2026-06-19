let alarmTime = "";
let alarmPeriod = "";

function setAlarm() {

    alarmTime = document.getElementById("alarmTime").value;
    alarmPeriod = document.getElementById("ampm").value;

    document.getElementById("message").innerHTML =
        "⏰ Alarm Set for " + alarmTime + " " + alarmPeriod;
}

setInterval(() => {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Current Clock Display
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

    // Alarm Check
    let currentTime =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0");

    let selectedHour = parseInt(alarmTime.split(":")[0]);

    // Convert selected AM/PM to 24-hour format
    if (alarmPeriod === "PM" && selectedHour < 12) {
        selectedHour += 12;
    }

    if (alarmPeriod === "AM" && selectedHour === 12) {
        selectedHour = 0;
    }

    let alarm24 =
        String(selectedHour).padStart(2, "0") + ":" +
        alarmTime.split(":")[1];

    if (currentTime === alarm24 && alarmTime !== "") {

        document.getElementById("message").innerHTML =
            "🔔 WAKE UP! ALARM RINGING 🔔";

        let sound = document.getElementById("alarmSound");

        sound.currentTime = 0;
        sound.play();

        // Alert after sound starts
        setTimeout(() => {
            alert("Wake Up!");
        }, 1000);

        alarmTime = "";
    }

}, 1000);
