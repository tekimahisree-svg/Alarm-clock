let alarmTime = "";

function setAlarm() {

    alarmTime = document.getElementById("alarmTime").value;

    document.getElementById("message").innerHTML =
        "⏰ Alarm Set for " + alarmTime;
}

setInterval(() => {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let displayHours = hours % 12;
    if(displayHours === 0){
        displayHours = 12;
    }

    let ampm = hours >= 12 ? "PM" : "AM";

    document.getElementById("currentTime").innerHTML =
        String(displayHours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0") +
        " " + ampm;

    let currentTime =
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0");

    if(currentTime === alarmTime && alarmTime !== ""){

        document.getElementById("message").innerHTML =
            "🔔 WAKE UP! 🔔";

        let sound = document.getElementById("alarmSound");

        sound.play().catch(() => {});

        alert("Wake Up!");

        alarmTime = "";
    }

},1000);
