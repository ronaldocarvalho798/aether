
document.addEventListener("DOMContentLoaded", function() {


  const scrollArrow = document.querySelector(".container-arrow");


  function handleScroll() {
    const scrollPosition = window.scrollY; 


    if (scrollPosition > 50) {
      scrollArrow.style.opacity = "0"; 
      scrollArrow.style.pointerEvents = "none"; 
    } else {
      scrollArrow.style.opacity = "1";
      scrollArrow.style.pointerEvents = "auto";
    }
  }

  window.addEventListener("scroll", handleScroll);

});