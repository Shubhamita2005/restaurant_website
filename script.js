const container = document.querySelector('.branches-card');

function scrollleft() {
    container.scrollBy({ left: -250, behavior: 'smooth' });
}
function scrollRight() {
    container.scrollBy({ left: 250, behavior: 'smooth' });
}
let slides = document.querySelectorAll(".slide");
let index = 0;
function changeSlide(){
    slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(changeSlide, 3000);
