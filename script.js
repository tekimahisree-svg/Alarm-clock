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

    // Display Time
    let displayHours = hours % 12;
    if (displayHours === 0) displayHours = 12;

    let period = hours >= 12 ? "PM" : "AM";

    document.getElementById("currentTime").innerHTML =
        String(displayHours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0") +
        " " + period;

    // Alarm Check
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

        sound.currentTime = 0;

        sound.play().catch(err => {
            console.log(err);
        });

        alarmTime = "";

        setTimeout(() => {
            alert("Wake Up!");
        }, 500);
    }

}, 1000);
