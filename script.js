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

    // Function to play background music
    function playBackgroundMusic() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.play();
    }

    // Function to pause background music
    function pauseBackgroundMusic() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.pause();
    }

    // Function to toggle background music
    function toggleBackgroundMusic() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic.paused) {
            playBackgroundMusic();
        } else {
            pauseBackgroundMusic();
        }
    }

    // Play background music immediately when the page loads
    playBackgroundMusic();

    // Add event listener for the button click to toggle background music
    document.getElementById("addMinuteBtn").addEventListener('click', toggleBackgroundMusic);

    // Initial call to update the countdown immediately
    updateCountdown();
});
