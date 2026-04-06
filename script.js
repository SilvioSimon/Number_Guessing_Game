let zahl = Math.floor(Math.random() * 100) + 1;

function check() {
    let tipp = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");

    if (tipp < zahl) {
        result.innerText = "Zu niedrig";
    } else if (tipp > zahl) {
        result.innerText = "Zu hoch";
    } else {
        result.innerText = "Richtig!";
    }
}