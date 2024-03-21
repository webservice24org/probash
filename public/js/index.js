/*	for mobile menu*/
const mobileNav = document.querySelector(".mobileNavberBtn");
const headerElem = document.querySelector(".mobileNavbarDisplay");
// const headerElem = document.querySelector(".header");
mobileNav.addEventListener("click", () => {
	headerElem.classList.toggle("active");
});

const headerElemEach = document.querySelectorAll(".linkNavDiv");
headerElemEach.forEach((elem) => {
	elem.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");		
	});
});
/*	for mobile menu*/

/*searchHover mobile*//*searchHover mobile*/
const searchIcon = document.querySelector('.searchIcon');
const searchHover = document.querySelector('.searchHover');
const mobileNavbarDisplay = document.querySelector('.mobileNavbarDisplay');
const searchHoverClose = document.querySelector('.searchHoverClose');
searchIcon.addEventListener('click', () => {
	searchHover.style.display= 'block';
	mobileNavbarDisplay.style.display= 'none';
});
searchHoverClose.addEventListener('click', () => {
	searchHover.style.display= 'none';
	mobileNavbarDisplay.style.display= 'block';
});
/*searchHover mobile*//*searchHover mobile*/

/*defaultImg*//*defaultImg*//*defaultImg*/
const img = document.getElementsByTagName('img')
for (var i = 0; i < img.length; i++) {
	img[i].onerror = function(event) {
		event.target.src = 'img/default.jpg'
		img.onerror = null
	}
}
/*defaultImg*//*defaultImg*//*defaultImg*/

/*Slide Functionality*//*Slide Functionality*//*Slide Functionality*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeSlide";
}
/*Slide Functionality*//*Slide Functionality*//*Slide Functionality*/