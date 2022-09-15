
 


// dark-mode handling

const toggleBtn = document.querySelector(".top-tooltip");

const clickDay = document.querySelector(".click-day");
const clickNight = document.querySelector(".click-night");
const main = document.querySelector(".main")
function changeImg() {
  clickDay.classList.toggle("hidden");
  clickNight.classList.toggle("hidden");
}
function toggle() {
  main.classList.toggle("grain")
  document.body.classList.toggle("dark-mode");
  document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#1a202c')
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
  main.classList.toggle("grain")
  document.body.classList.toggle("dark-mode");
  document.querySelector('meta[name="theme-color"]').toggleAttribute('content',  '#1a202c')
  modal.classList.toggle(`block`);
  modal.classList.toggle(`hidden`)
  changeImg1();
  ;
}
clickNight1.addEventListener("click", toggle1);
toggleBtn1.addEventListener("click", toggle1);

// modal handling
const modal = document.querySelector(".modal");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".closeModal");

hamburger.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  hamburger.classList.toggle("active");
  modal.classList.toggle(`block`);
  modal.classList.toggle(`hidden`)
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
