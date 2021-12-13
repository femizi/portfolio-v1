// dark-mode handling
const toggleBtn = document.querySelector(".top-tooltip");

const clickDay = document.querySelector(".click-day");
const clickNight = document.querySelector(".click-night");
function changeImg() {
  clickDay.classList.toggle("hidden");
  clickNight.classList.toggle("hidden");
}
function toggle() {
  document.body.classList.toggle("dark-mode");
  changeImg();
}
clickNight.addEventListener("click", toggle);
toggleBtn.addEventListener("click", toggle);

// modal buttons
const toggleBtn1 = document.querySelector(".hidden-tooltip");
const clickDay1 = document.querySelector(".click-day1");
const clickNight1 = document.querySelector(".click-night1");

function changeImg1() {
  clickDay1.classList.toggle("hidden");
  clickNight1.classList.toggle("hidden");
}

function toggle1() {
  document.body.classList.toggle("dark-mode");
  changeImg1();
  closeModal();
}
clickNight1.addEventListener("click", toggle1);
toggleBtn1.addEventListener("click", toggle1);

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
