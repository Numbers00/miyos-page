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
window.addEventListener('scroll', () => {fadeIn(); checkActiveNav();});
function fadeIn () {
  for (let i = 0; i < fadeElems.length; i++) {
    let elem = fadeElems[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("in-view");
    } else {
      elem.classList.remove("in-view");
    }
  }
}
fadeIn();
// end adapted code

// window.onload = async () => {
//   let drawings = [];
//   await fetch('drawings.json')
//     .then(response => response.json())
//     .then(data => drawings = data)
//     .catch(err => console.log(err));

//   // Randomize the order of drawings using Fisher-Yates shuffle algorithm
//   for (let i = drawings.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [drawings[i], drawings[j]] = [drawings[j], drawings[i]];
//   }

//   const drawingSlider = document.querySelector('.drawings-slider');
//   for (let i = 0; i < drawings.length; i++) {
//     const drawing = drawings[i];
//     const drawingElem = document.createElement('div');
//     drawingElem.classList.add('drawing-container');

//     const drawingImg = document.createElement('img');
//     drawingImg.src = drawing.src;
//     drawingImg.alt = drawing.alt;
//     drawingImg.classList.add('drawing-img', 'has-fade');
    
//     drawingElem.appendChild(drawingImg);
//     drawingSlider.appendChild(drawingElem);
//   }
// };

const sections = document.querySelectorAll('section');
const checkActiveNav = () => {
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let scrollTop = window.pageYOffset;
    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      let navLinks = document.querySelectorAll('.nav-link');
      for (let j = 0; j < navLinks.length; j++) {
        let navLink = navLinks[j];
        if (navLink.getAttribute('href') === `#${section.id}`) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    }
  }
}

const checkSubmitEligibility = () => {
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const type = document.getElementById('typeInput').value;
  const size = document.getElementById('sizeInput').value;
  const color = document.getElementById('colorInput').value;
  const background = document.getElementById('backgroundInput').value;
  const submitBtn = document.querySelector('.submit-btn');
  if (name && email && type && size && color && background) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
document.querySelector('#nameInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#emailInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#typeInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#sizeInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#colorInput').addEventListener('keyup', checkSubmitEligibility);
document.querySelector('#backgroundInput').addEventListener('keyup', checkSubmitEligibility);

const sendMail = (event) => {
  event.preventDefault();

  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const type = document.getElementById('typeInput').value;
  const size = document.getElementById('sizeInput').value;
  const color = document.getElementById('colorInput').value;
  const background = document.getElementById('backgroundInput').value;
  const refImgs = document.getElementById('refImgsInput').value;
  const specReqs = document.getElementById('specReqsInput').value;
  const charName = document.getElementById('charNameInput').value;
  const charDesc = document.getElementById('charDescInput').value;

  const emailBody = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Type of Drawing: ${type}</p>
    <p>Size: ${size}</p>
    <p>Color: ${color}</p>
    <p>Background: ${background}</p>
    <p>Reference Image/s: ${refImgs}</p>
    <p>Specific Request/s: ${specReqs}</p>
    <p>Character Name: ${charName}</p>
    <p>Character Description: ${charDesc}</p>
  `;
  
  Email.send({
    SecureToken: 'e9562325-46b4-4577-bd9d-804947d4ee3e',
    To: 'rosymiyo8@gmail.com',
    From: 'kylemariangelo@gmail.com',
    Subject: `Art Commission Request from ${name}`,
    Body: emailBody
  }).then(
    message => alert('art commission email sent successfully')
  ).catch((error) => {
    alert(error);
  });
};
document.querySelector('.submit-btn').addEventListener('click', sendMail);
