const toggleElements = document.querySelectorAll(".read-more-toggle");

toggleElements.forEach(function (toggleElement, index) {
  const longTextContainer = toggleElement.nextElementSibling;
  const labelElement = document.querySelectorAll(".read-more-label")[index];
  const shortTextContainer = toggleElement.parentElement;
  let scrollPosition;

  toggleElement.addEventListener("click", function () {
    if (this.checked) {
      longTextContainer.style.display = "block";
      labelElement.textContent = "Weniger anzeigen ⤴";
    } else {
      longTextContainer.style.display = "none";
      scrollPosition = shortTextContainer.offsetTop + 300; // Adjust scroll position by 20px
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      labelElement.textContent = "Mehr lesen...";
    }
  });

  // Set the initial label text
  labelElement.textContent = toggleElement.checked
    ? "Weniger anzeigen ⤴"
    : "Mehr lesen...";
});
