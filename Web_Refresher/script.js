const genreSelect = document.getElementById("genre-select");
const bookCards = document.querySelectorAll(".book-card");
const bookCount = document.getElementById("book-count");

genreSelect.addEventListener("change", function () {
  const selectedGenre = this.value;
  let visibleCount = 0;

  bookCards.forEach(function (card) {
    const cardGenre = card.getAttribute("data-genre");

    if (selectedGenre === "all" || cardGenre === selectedGenre) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  bookCount.textContent = `Showing: ${visibleCount} book${visibleCount === 1 ? "" : "s"}`;
});