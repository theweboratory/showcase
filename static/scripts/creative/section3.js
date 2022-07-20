document.querySelectorAll(".card2-alt-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
      btn.classList.toggle("change");
      btn.nextElementSibling.classList.toggle('change');
  });
});
