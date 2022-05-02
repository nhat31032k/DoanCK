$("#slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 300,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
});

$(".client__review").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 300,
  prevArrow:
    '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow:
    '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
});
$(".slides").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: "linear",
});

$(".product__wrap > .list__item").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//  ===== Login =====

let register = document.querySelector(".not__count > .simple__link");
let back__login = document.querySelector(".back__login > .simple__link");
let sing__up = document.querySelector(".sing__up");
let close__login = document.querySelectorAll(".close");
let login__wrap = document.querySelector(".login__wrap");
function login() {
  let user = document.getElementById("user");
  console.log(user);
  user.addEventListener("click", function () {
    login__wrap.classList.add("active");
  });

  close__login.forEach((it, idx) => {
    it.addEventListener("click", function () {
      sing__up.classList.remove("active");
      login__wrap.classList.remove("active");
    });
  });
}
login();

//  ===== sing up =====

function singUp() {
  register.addEventListener("click", function () {
    sing__up.classList.add("active");
    login__wrap.classList.remove("active");
  });
  back__login.addEventListener("click", function () {
    sing__up.classList.remove("active");
    login__wrap.classList.add("active");
  });
}
singUp();

function forGotPass() {
  let forgot__password = document.querySelector(".forgot__password");
  let forgot__pass = document.querySelector(".forgot__pass");
  let cancel__login = document.querySelector(".cancel");
  forgot__password.addEventListener("click", function () {
    forgot__pass.classList.add("active");
  });
  cancel__login.addEventListener("click", function () {
    forgot__pass.classList.remove("active");
  });
}

forGotPass();

// header

function header() {
  let header = document.querySelector("#header");
  console.log(header);
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    if (y > 100) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

header();
