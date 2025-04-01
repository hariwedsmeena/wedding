// Countdown Timer
const weddingDate = new Date("Jan 24, 2026 08:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours until the big day!`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The celebration has begun!";
    }
}, 1000);

// RSVP Form Submission (basic alert for now)
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your RSVP! See you at the wedding!");
});