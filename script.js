const drawingSlider = tns({
  container: '.drawings-slider',
  items: 4,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  controls: false,
  nav: false,
  speed: 400
});

const videoSlider = tns({
  container: '.videos-slider',
  center: true,
  items: 4,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  controls: false,
  nav: false,
  speed: 400
});

const ocSlider = tns({
  container: '.ocs-slider',
  center: true,
  items: 3,
  slideBy: 'page',
  mouseDrag: true,
  swipeAngle: false,
  controls: false,
  nav: false,
  speed: 400
});

// code adapted from and thanks to
// https://codepen.io/bstonedev/pen/MWWZgKz
const fadeElems = document.querySelectorAll(".has-fade");
window.addEventListener('scroll', fadeIn);
function fadeIn () {
  for (var i = 0; i < fadeElems.length; i++) {
    let elem = fadeElems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    console.log(distInView);
    if (distInView < 0) {
      elem.classList.add("in-view");
    } else {
      elem.classList.remove("in-view");
    }
  }
}
fadeIn();
// end adapted code

document.querySelector('#nameInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#emailInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#typeInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#sizeInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#colorInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#background').addEventListener('keyup', checkSubmitEligibility);
function checkSubmitEligibility () {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const type = document.getElementById('typeInput').value;
  const size = document.getElementById('sizeInput').value;
  const color = document.getElementById('colorInput').value;
  const background = document.getElementById('background').value;
  const submitBtn = document.getElementById('submit-btn');
  if (name && email && type && size && color && background) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
