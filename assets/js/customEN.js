const toggleElements = document.querySelectorAll(".read-more-toggle");
const readMoreLabels = document.querySelectorAll('.read-more-label');
readMoreLabels.forEach(label => {
  label.addEventListener('mouseover', () => {
    {
      passive: true
    }
    label.classList.add('hovered');
  });

  label.addEventListener('mouseout', () => {
    {
      passive: true
    }
    label.classList.remove('hovered');
  });
});
toggleElements.forEach(function (toggleElement, index) {
  const longTextContainer = toggleElement.nextElementSibling;
  const labelElement = document.querySelectorAll(".read-more-label")[index];
  const shortTextContainer = toggleElement.parentElement;
  let scrollPosition;

  toggleElement.addEventListener("click", function () {
    {
      passive: true
    }
    if (this.checked) {
      longTextContainer.style.display = "block";
      labelElement.textContent = "Read less ⤴";
    } else {
      longTextContainer.style.display = "none";
      scrollPosition = shortTextContainer.offsetTop + 300; // Adjust scroll position by 20px
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
      labelElement.textContent = "Read more...";
    }
  });

  // Set the initial label text
  labelElement.textContent = toggleElement.checked ?
    "Read less ⤴" :
    "Read more...";
});