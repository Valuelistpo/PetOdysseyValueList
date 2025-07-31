document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".pet-card");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const petName = card.querySelector(".pet-name").textContent.replace(/\s/g, '');
      modalImg.src = `images/${petName}_ingame.png`;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});
