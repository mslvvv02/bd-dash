const cake = document.getElementById("cake");
const message = document.getElementById("message");
const footer = document.getElementById("footer");
const confettiContainer = document.getElementById("confetti-container");

// Tunggu halaman selesai dimuat
window.addEventListener("load", () => {

    // Biar tulisan pembuka sempat terbaca
    setTimeout(() => {
        cake.classList.add("show");
    }, 700);

    // Ucapan ulang tahun muncul setelah kue
    setTimeout(() => {
        message.classList.add("show");
        footer.classList.add("show");
        launchConfetti();
    }, 1400);

});

function launchConfetti() {
    const colors = [
        "#ff8fab",
        "#ffd166",
        "#b8a1e3",
        "#95d5b2",
        "#ffadad",
        "#a0c4ff"
    ];

    // Bikin 90 potong confetti
    for (let i = 0; i < 90; i++) {
        const piece = document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            (Math.random() * 1.5) + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);

        // Hapus elemen setelah animasi selesai
        setTimeout(() => {
            piece.remove();
        }, 7000);
    }
}