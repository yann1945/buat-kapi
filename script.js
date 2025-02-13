const messages = [
    "Beneran?",
    "Serius nih??",
    "Beneran nih???",
    "Yakin??!!",
    "Pikirin dulu ajaaa",
    "Coba pikirin duluu",
    "Aelah... Beneran?",
    "Mau ajaaa",
    "Ok fine dehh",
    "Aku sedih sihh"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


document.body.addEventListener("click", function() {
    let overlay = document.querySelector(".transition-overlay");
    overlay.classList.add("transition-active");

    setTimeout(() => {
        window.location.href = "page.html"; // Ganti dengan halaman tujuan
    }, 500); // Sesuaikan dengan durasi animasi
});
