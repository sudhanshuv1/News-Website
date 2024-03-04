const mobileMenu = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');

let animateMenuKeyframes = new KeyframeEffect(
  mobileMenu, 
  [
    { marginLeft: '100vw' }, 
    { marginLeft: '63vw' },
    { marginLeft: '25vw' },
  ], 
  { duration: 400 }
);

let reverseAnimateMenuKeyframes = new KeyframeEffect(
  mobileMenu, 
  [
    { marginLeft: '25vw' }, 
    { marginLeft: '63vw' },
    { marginLeft: '100vw' },
  ], 
  { duration: 400 }
);

let mobileMenuAnimation = new Animation(animateMenuKeyframes);
let reverseMobileMenuAnimation = new Animation(reverseAnimateMenuKeyframes);



function toggleMobileMenu(){
  hamburgerIcon.classList.toggle('open');
  if(hamburgerIcon.classList.contains('open')){
      mobileMenuAnimation.play();
      setTimeout(setLeftMargin(true),400);
  }else{
      reverseMobileMenuAnimation.play();
      setTimeout(setLeftMargin(false),400);
  }
}

let setLeftMargin = (flag) => {
  mobileMenu.style.marginLeft = flag ? '25vw' : '100vw';
}


