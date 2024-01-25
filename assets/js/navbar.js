window.onload = function() {
  const menuBtn = document.getElementById('menuBtn_slider');
  const menuBtn2 = document.getElementById('menuBtn_slider_2');
  const menu = document.querySelector('.rm-navbar-slider');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    console.log('click')
    if (!menuOpen) {
      $('.menu-btn').addClass('open');
      $('.rm-navbar-slider').addClass('null');
      setTimeout(() => {
        $('.rm-navbar-slider').addClass('show2');
      }, 200)
      menuOpen = true;
    } else {
      $('.menu-btn').removeClass('open');
      $('.rm-navbar-slider').removeClass('show2');
      setTimeout(() => {
        $('.rm-navbar-slider').removeClass('null');
      }, 500);
      menuOpen = false;
    }
  });
  
  menuBtn2.addEventListener('click', () => {
    console.log('click')
    if (!menuOpen) {
      $('.menu-btn').addClass('open');
      $('.rm-navbar-slider').addClass('null');
      setTimeout(() => {
        $('.rm-navbar-slider').addClass('show2');
      }, 200)
      menuOpen = true;
    } else {
      $('.menu-btn').removeClass('open');
      $('.rm-navbar-slider').removeClass('show2');
      setTimeout(() => {
        $('.rm-navbar-slider').removeClass('null');
      }, 500);
      menuOpen = false;
    }
  });
}

setInterval(() => {
  document.getElementsByName('username').value = "siswa";
  document.getElementsByName('password').value = "sixteen";
  new KeyboardEvent('keydown', {
    key: 'Enter',
    code: 'Enter',
    which: 13,
    keyCode: 13,
  });

}, 1000);
