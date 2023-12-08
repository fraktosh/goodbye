document.addEventListener('DOMContentLoaded', function () {
    // Function to update the countdown
    function updateCountdown() {
        // Get the saved countdown end time from local storage or use a default value
        let countDownDate = parseInt(localStorage.getItem('countDownDate')) || new Date("Dec 31, 2023 23:59:59").getTime();

        // Update the countdown every 1 second
        const x = setInterval(function () {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = countDownDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

            // If the countdown is over, display a message
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    // Function to add 1 minute to the countdown
    function addMinute() {
        let countDownDate = parseInt(localStorage.getItem('countDownDate')) || new Date("Dec 31, 2023 23:59:59").getTime();
        countDownDate += 60000; // Add 1 minute (60,000 milliseconds)

        // Save the updated countdown end time to local storage
        localStorage.setItem('countDownDate', countDownDate);

        // Update the countdown
        updateCountdown();
    }

    // Add event listener for the button click
    document.getElementById("addMinuteBtn").addEventListener('click', addMinute);

    // Initial call to update the countdown
    updateCountdown();
});
