const slider = document.querySelector('#showcase');
const arrLeft = document.querySelector('.prev');
const arrRight = document.querySelector('.next');
const heading = document.querySelector('.container h1');
const description = document.querySelector('#showcase p');

const images = ["lapcoffee2.jpg", "commty_1.avif", "cmnty2.jpg" ];

const headings = [ "Afordable Professional Web Design","Great and Thriving Community", "Professional Consultation "  ];

const descriptions = [
  "Lorem Ipsum has and scrambled it to make a type specimen",
  "Ipsum is simply dummy text of the printing",
  "scrambled it to make a type specimen book"
];

   //slider Id 
   let id = 0;

   // slider function
   function slide (id) {
    slider.style.backgroundImage =`url(./css/img/${images[id]})`
   
   };

   //imgfade animation
   slider.classList.add('image-fade');

  //  rmve animation
  setTimeout(() => {
    slider.classList.remove('image-fade'); 
  }, 550);

  heading.innerText = headings[id];
  description.innerText = descriptions[id];

  arrLeft.addEventListener('click', () => {
    id--;

    if(id < 0) {
      id = images.length - 1; 
    }

    slide(id);
  });

  arrRight.addEventListener('click', () =>{
     
    id++;

    if (id > images.length - 1) {
      id = 0;
    }

    slide(id);
  })