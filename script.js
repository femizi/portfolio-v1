// dark-mode handling
const toggleBtn = document.querySelector(".top-tooltip")
const clickDay = document.querySelector('.click-day')
const clickNight = document.querySelector('.click-night')
function changeImg(){
  clickDay.classList.toggle("hidden")
  clickNight.classList.toggle("hidden")
  }
function toggle (){
  document.body.classList.toggle("dark-mode");
  changeImg()
  

}

toggleBtn.addEventListener("click", toggle)



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
