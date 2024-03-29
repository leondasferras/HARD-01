const title = document.querySelector('.carousel-title');
const description = document.querySelector('.carousel-description');
const roadIcon = document.querySelector('.section-highway__carousel-road-icon');
// Шаблон велосипеда в слайдере.
const bicycleTemplate = document.querySelector("#bicycle-template").content;
// Контейнер для велосипедов.
const bicycles = document.querySelector(".swiper-bicycles .swiper-wrapper");

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

const highwayArray = [
  {
    title: "Cervelo Caledonia-5",
    image: "./images/cervelo-caledonia-5.png"
  },

  {
    title: "Cannondale Systemsix Himod",
    image: "./images/cannondale-systemsix-himod.png"
  },

  {
    title: "Trek Domane SL-7",
    image: "./images/trek-domane-sl-7.png"
  }
];

const gravelArray = [
  {
    title: "Cervelo Aspero GRX 810",
    image: "./images/cervelo-aspero-grx-810.png"
  },
  {
    title: "Specialized S-Works Diverge",
    image: "./images/specialized-s-works-diverge.png"
  },
  {
    title: "Cannondale Topstone Lefty 3",
    image: "./images/cannondale-topstone-lefty- 3.png"
  }
];

const ttArray = [
  {
    title: "Specialized S-Works Shiv",
    image: "./images/specialized-s-works-shiv.png"
  },
  {
    title: "BMC Timemachine 01 ONE",
    image: "./images/bmc-timemachine-01.png"
  },
  {
    title: "Cervelo P-Series",
    image: "./images/cervelo-p-series.png"
  }
];


// Инициализация слайдера с местностями.
const swiperLandscape = new Swiper(".swiper-landscape", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".section-highway__carousel-button_move_next",
    prevEl: ".section-highway__carousel-button_move_prev"
  },
  loop: true,
  on: {
    init: function (swiper) {
      changeSliderItemInfo(swiper.realIndex);
    },
    slideChange: function (swiper) {
      changeSliderItemInfo(swiper.realIndex);
    }
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});



// Инициализация слайдера с велосипедами.
var swiperBicycles = new Swiper(".swiper-bicycles", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    }
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2
    }
  },
  on: {
    init: function (swiper) {
      fillBicycleSlider(highwayArray);
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

//Переключение слайдера с велосипедами
document.querySelector('.section-bicycles__link_highway').addEventListener('click', (event) => {
  document.querySelector('.section-bicycles__link_active').classList.remove('section-bicycles__link_active');
  event.target.classList.add('section-bicycles__link_active');
  fillBicycleSlider(highwayArray);
})

document.querySelector('.section-bicycles__link_gravel').addEventListener('click', (event) => {
  document.querySelector('.section-bicycles__link_active').classList.remove('section-bicycles__link_active');
  event.target.classList.add('section-bicycles__link_active');
  fillBicycleSlider(gravelArray);
})

document.querySelector('.section-bicycles__link_tt').addEventListener('click', (event) => {
  document.querySelector('.section-bicycles__link_active').classList.remove('section-bicycles__link_active');
  event.target.classList.add('section-bicycles__link_active');
  fillBicycleSlider(ttArray);
})




// Переключение темы
const themeSwitch = document.querySelector('.footer__switch-container');
const page = document.querySelector('.page')
themeSwitch.addEventListener('click', () => {
  themeSwitch.classList.toggle("footer__switch-container_active")
  page.classList.toggle("page_dark")
})

const themeSwitch2 = document.querySelector('.burger-menu__switch-container');
themeSwitch2.addEventListener('click', () => {
  themeSwitch2.classList.toggle("burger-menu__switch-container_active")
  page.classList.toggle("page_dark")
})




// Создать велосипед из шаблона.
function createBicycleCard(data) {
  const bicycleElement = bicycleTemplate.querySelector(".swiper-slide").cloneNode(true);
  bicycleElement.querySelector(".bicycle-title").textContent = data.title;
  const bicycleImage = bicycleElement.querySelector(".bicycle-image");
  bicycleImage.src = data.image;
  bicycleImage.alt = data.title;

  return bicycleElement;
}


function fillBicycleSlider(bicycleArray) {
  bicycles.textContent = "";
  bicycleArray.forEach((bicycle) => {
    const newBicycleCard = createBicycleCard(bicycle);
    bicycles.append(newBicycleCard);
  });
};


//Открытие бургер меню

document.querySelector('.header__burger-button').addEventListener('click', () => {
  document.querySelector('.burger-menu').classList.add('burger-menu_active')
})

//Закрытие бургер меню

document.querySelector('.burger-menu__exit-button').addEventListener('click', () => {
  document.querySelector('.burger-menu').classList.remove('burger-menu_active')
})

//Клик по кнопке ok (sunscribe)

document.querySelector('.footer__subscribe-button').addEventListener('click', () => {
  document.querySelector('.footer__subscribe-input').value = "Круто!!!"
})



//Закрываем бургер меню при переходе по ссылке
const burgerLinks = document.querySelectorAll(".burger-menu__link__item")
burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.remove('burger-menu_active')
  })
} )