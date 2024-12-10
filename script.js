let currentPage = 1;
const totalPages = 20;
const ebookImage = document.getElementById("ebook-image");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

function updateNavigation() {
  ebookImage.src = `IMAGE/${String(currentPage).padStart(2, '0')}.png`;

  backButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

backButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateNavigation();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updateNavigation();
  }
});

updateNavigation();
