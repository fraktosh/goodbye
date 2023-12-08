document.addEventListener('DOMContentLoaded', function () {
    let countDownDate = new Date("September 6 , 2024 23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }

    updateCountdown(); // Initial countdown update

    const x = setInterval(updateCountdown, 1000);

    // Button click event
    document.getElementById("addMinute").addEventListener("click", function () {
        countDownDate += 1 * 60 * 1000; // Add 1 minute (in milliseconds)
        updateCountdown();
    });
});
