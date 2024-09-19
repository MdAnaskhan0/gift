
document.getElementById('wish-button').addEventListener('click', function() {
    const message = document.getElementById('message');

    // Start the confetti animation
    createConfetti();

    // Slowly show the message with a fade-in effect
    message.style.opacity = '0';
    message.innerHTML = "Hi, I am Md. Anas Khan as your friend, wishing you the best birthday ever! May your year be filled with happiness, success, and lots of fun! 🎂🎁";
    message.style.transition = 'opacity 3s ease-in'; // 3 seconds fade-in
    setTimeout(() => {
        message.style.opacity = '1'; // Gradually fade in
    }, 500); // Start fading after 0.5 seconds

    // Hide the button after clicking
    document.getElementById('wish-button').style.display = 'none';
});

function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 150; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiPiece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiPiece.style.width = Math.random() * 10 + 5 + 'px';
        confettiPiece.style.height = Math.random() * 20 + 10 + 'px';
        confettiContainer.appendChild(confettiPiece);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}
