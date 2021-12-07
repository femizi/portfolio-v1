// modal handling
const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeModal");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
