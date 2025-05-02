
let slide_no = 1;
show_Slides(slide_no);

function plus_Slides(n) {
  show_Slides(slide_no += n);
}

function current_Slide(n) {
  show_Slides(slide_no = n);
}

function show_Slides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slide_no = 1}    
  if (n < 1) {slide_no = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_no-1].style.display = "block";  
  dots[slide_no-1].className += " active";
}