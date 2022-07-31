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
let elementsArray = document.querySelectorAll(".has-fade");
window.addEventListener('scroll', fadeIn); 
function fadeIn () {
    for (var i = 0; i < elementsArray.length; i++) {
        let elem = elementsArray[i];
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
