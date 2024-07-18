const targetEndTime = new Date('2024-09-09T00:00:00').getTime();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeRemaining = targetEndTime - currentTime;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Deal has ended!';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        const countdownText = `<div class="mt-3">${days}d ${hours}h ${minutes}m ${seconds}s</div>`;
        document.getElementById('countdown').innerHTML = countdownText;
    }
}