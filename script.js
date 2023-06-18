document.addEventListener("DOMContentLoaded", function () {
  const flipbook = document.querySelector(".flipbook");
  const images = flipbook.querySelectorAll("img");
  const btnHome = document.getElementById("btn-home");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");

  let currentPage = 0;
  const totalPages = images.length;

  // Tampilkan halaman pertama saat halaman dimuat
  showPage(currentPage);

  // Fungsi untuk menampilkan halaman
  function showPage(page) {
    // Sembunyikan semua gambar
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }

    // Tampilkan halaman yang dipilih
    images[page].style.display = "block";
  }

  // Fungsi untuk menampilkan halaman selanjutnya
  function nextPage() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(currentPage);
    }
  }

  // Fungsi untuk menampilkan halaman sebelumnya
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  }

  // Tambahkan event listener untuk tombol home
  btnHome.addEventListener("click", function () {
    currentPage = 0;
    showPage(currentPage);
  });

  // Tambahkan event listener untuk tombol selanjutnya
  btnNext.addEventListener("click", nextPage);

  // Tambahkan event listener untuk tombol sebelumnya
  btnPrev.addEventListener("click", prevPage);
});

//Tambahkan event listener untuk swipe
flipbook.addEventListener("wheel", function (event) {
  if (event.deltaY < 0) {
    handleSwipeUp();
  } else {
    handleSwipeDown();
  }
});
