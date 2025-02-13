$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});

document.body.addEventListener("click", function() {
    let overlay = document.querySelector(".transition-overlay");
    overlay.classList.add("transition-active");

    setTimeout(() => {
        window.location.href = "page.html"; // Ganti dengan halaman tujuan
    }, 500); // Sesuaikan dengan durasi animasi
});

