const title = document.querySelector('.carousel-title');
const description = document.querySelector('.carousel-description');
const infoArray = [
  {
    title: "Шоссе",
    description: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно."
  },
  {
    title: "Грэвел",
    description: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью."
  },
  {
    title: "ТТ",
    description: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный."
  }
];

// Слайдер для местности.
function highwaySlider() {
  let position = 0;
  let activeElement = 0;
  let gap = 690;

  const track = document.querySelector('.section-highway__carousel-track');
  const btnPrev = document.querySelector('.section-highway__carousel-button_move_prev');
  const btnNext = document.querySelector('.section-highway__carousel-button_move_next');

    btnNext.addEventListener('click', () => {
      track.style.transform = `translateX(${position - gap}px)`;
      position -= gap;
      activeElement += 1;
      title.textContent = infoArray[activeElement].title;
      description.textContent = infoArray[activeElement].description;
    })


    btnPrev.addEventListener('click', () => {
      track.style.transform = `translateX(${position + gap}px)`;
      position += gap;
      activeElement -= 1;
      title.textContent = infoArray[activeElement].title;
      description.textContent = infoArray[activeElement].description;
    })
  }


highwaySlider();


// Слайдер для велосипедов.

function bicyclesSlider() {
  let position = 0;
  let gap = 1230;

  const track = document.querySelector('.section-bicycles__carousel-track');
  const btnHighway = document.querySelector('.button-highway');
  const btnGravel = document.querySelector('.button-gravel');
  const btnTT = document.querySelector('.button-tt');

  btnHighway.addEventListener('click', () => {
    changeActiveDot(0);

    if (position === -gap) {
    track.style.transform = `translateX(${position + gap}px)`;
    position += gap;
     }

    else if (position === -(gap * 2)) {
    track.style.transform = `translateX(${position + gap*2}px)`
      }
    position = 0;
    console.log(position);
  })

  btnGravel.addEventListener('click', () => {
    changeActiveDot(1);
    if (position === 0) {
      track.style.transform = `translateX(${position - gap}px)`;
      position -= gap;
    }
    else if (position === -(gap * 2)) {
      track.style.transform = `translateX(${position + gap}px)`;
      position += gap;
    }
  })

  btnTT.addEventListener('click', () => {

    changeActiveDot(2);
    if (position === 0) {
      track.style.transform = `translateX(${position - gap*2}px)`;
      position -= gap*2;
    }

    else if (position === -gap) {
      track.style.transform = `translateX(${position - gap}px)`;
      position -= gap;
    }
    console.log(position);

  })

}
;

function changeActiveDot(newActiveElement) {
  const dots = document.querySelectorAll('.section-bicycles__button')
  const dotArray = [...dots];
  const activeDot = dotArray.find((dot) =>
      dot.classList.contains("active-dot")
  );
  activeDot.classList.remove("active-dot");
  dotArray[newActiveElement].classList.add("active-dot");
};

bicyclesSlider();


// Переключение темы
const themeSwitch = document.querySelector('.footer__switch-container');
const page = document.querySelector('.page')
themeSwitch.addEventListener('click', () => {
  themeSwitch.classList.toggle("footer__switch-container_active")
  page.classList.toggle("page_dark")
})