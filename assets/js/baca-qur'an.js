window.onwheel = e => {
    if(e.deltaY >= 0){
      // Wheel Down
      document.getElementById("navbar").classList.add("collaps-smooth");
      document.getElementById("slider-toppadding").classList.add("top-navbar");
      setTimeout(() => {
        document.getElementById("slider-toppadding").classList.remove("padding-2x");
      }, 110)    
    } else {
      // Wheel Up
      document.getElementById("navbar").classList.add("collaps-smooth-down");
      document.getElementById("slider-toppadding").classList.add("padding-2x");
      setTimeout(() => {
        document.getElementById("slider-toppadding").classList.remove("top-navbar");
      }, 100)  
      setTimeout(() => {
        document.getElementById("navbar").classList.remove("collaps-smooth");
      }, 50)
      setTimeout(() => {
        document.getElementById("navbar").classList.remove("collaps-smooth-down");
      }, 500)
      setTimeout(() => {
        document.getElementById("slider-toppadding").classList.remove("top-navbar");
      }, 100)  
    }
  }

window.onload = function() {
  let sliderBtn = document.getElementById("sliderBtn");
  let closesliderBtn = document.getElementById("closeBtn");
  let chevronRot = document.getElementById("chevronRot");
  let menuOpen2 = false;

  sliderBtn.addEventListener('click', () => {
    console.log('click')
    if(!menuOpen2) {
      chevronRot.classList.add("rotate");
      menuOpen2 = true;
    } else {
      chevronRot.classList.add("norotate");
      setTimeout(() => {
        chevronRot.classList.remove("rotate");
      }, 500);
      setTimeout(() => {
        chevronRot.classList.remove("norotate");
      }, 1000);
      menuOpen2 = false;
    }
  });

  closesliderBtn.addEventListener('click', () => {
    console.log('click')
    if(!menuOpen2) {
      chevronRot.classList.add("rotate");
      menuOpen2 = true;
    } else {
      chevronRot.classList.add("norotate");
      setTimeout(() => {
        chevronRot.classList.remove("rotate");
      }, 500);
      setTimeout(() => {
        chevronRot.classList.remove("norotate");
      }, 1000);
      menuOpen2 = false;
    }
  });
}

window.onload = function{
  let URL_RM = URL(window.location.search);
  
}