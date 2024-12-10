let currentSecondPage = 1;
const totalSecondPages = 28; // Update this to the total number of pages in IMAGE1 folder

const secondEbookImage = document.getElementById("second-ebook-image");
const secondBackButton = document.getElementById("second-back-button");
const secondNextButton = document.getElementById("second-next-button");

function updateSecondNavigation() {
  // Load the correct image from IMAGE1 folder
  secondEbookImage.src = `IMAGE1/${String(currentSecondPage).padStart(2, '0')}.png`;

  // Disable or enable navigation buttons
  secondBackButton.disabled = currentSecondPage === 1;
  secondNextButton.disabled = currentSecondPage === totalSecondPages;
}

secondBackButton.addEventListener("click", () => {
  if (currentSecondPage > 1) {
    currentSecondPage--;
    updateSecondNavigation();
  }
});

secondNextButton.addEventListener("click", () => {
  if (currentSecondPage < totalSecondPages) {
    currentSecondPage++;
    updateSecondNavigation();
  }
});

// Initialize navigation on page load
updateSecondNavigation();
