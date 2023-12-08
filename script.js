document.addEventListener('DOMContentLoaded', function () {
    // Function to get the countdown end time from local storage or use a default value
    function getCountdownDate() {
        return parseInt(localStorage.getItem('countDownDate')) || new Date("Sep 6, 2024 23:59:59").getTime();
    }

    // Function to update the countdown display
    function updateCountdownDisplay(distance) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
    }

    // Function to update the countdown
    function updateCountdown() {
        // Update the countdown every 1 second
        const x = setInterval(function () {
            const countDownDate = getCountdownDate();  // Get the countdown date inside the interval

            const now = new Date().getTime();
            const distance = countDownDate - now;

            // Display the countdown
            updateCountdownDisplay(distance);

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    // Function to add 1 minute to the countdown
    function addMinute() {
        let countDownDate = getCountdownDate();
        countDownDate += 60000; // Add 1 minute (60,000 milliseconds)

        // Save the updated countdown end time to local storage
        localStorage.setItem('countDownDate', countDownDate);

        // Update the countdown immediately
        updateCountdown();
    }

    // Add event listener for the button click
    document.getElementById("addMinuteBtn").addEventListener('click', addMinute);

    // Initial call to update the countdown immediately
    updateCountdown();
});
