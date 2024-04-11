// JavaScript code for displaying current time
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Add leading zeros if necessary
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Display the time in the "time" element
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Call updateTime() every second
setInterval(updateTime, 1000);

// Initialize the time when the page loads
updateTime();
