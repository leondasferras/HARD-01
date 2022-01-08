const title = document.querySelector('.carousel-title');
const description = document.querySelector('.carousel-description');
const roadIcon = document.querySelector('.section-highway__carousel-road-icon');
const infoArray = [
  {
    title: "Шоссе",
    description: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    icon: "section-highway__carousel-road-icon_bg_highway"
  },
  {
    title: "Грэвел",
    description: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    icon: "section-highway__carousel-road-icon_bg_gravel"
  },
  {
    title: "ТТ",
    description: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    icon: "section-highway__carousel-road-icon_bg_tt"
  }
];


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: ".section-highway__carousel-button_move_next",
    prevEl: ".section-highway__carousel-button_move_prev",
  },
  loop: true,
  on: {
    init: function (sw) {
      changeSliderItemInfo(sw.realIndex);
    },
    slideChange: function (sw) {
      changeSliderItemInfo(sw.realIndex);
    }
  }
});

function changeSliderItemInfo(index) {
  title.textContent = infoArray[index].title;
  description.textContent = infoArray[index].description;
  roadIcon.classList = "";
  roadIcon.classList.add("section-highway__carousel-road-icon");
  roadIcon.classList.add(infoArray[index].icon);
}




// Переключение темы
const themeSwitch = document.querySelector('.footer__switch-container');
const page = document.querySelector('.page')
themeSwitch.addEventListener('click', () => {
  themeSwitch.classList.toggle("footer__switch-container_active")
  page.classList.toggle("page_dark")
})




























// Слайдер для велосипедов.
/*

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
*/
