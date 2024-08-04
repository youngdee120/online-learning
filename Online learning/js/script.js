// Selecting the necessary elements
let navbar = document.querySelector('.header .navbar');
let accountForm = document.querySelector('.account-form');
let accountBtn = document.querySelector('#account-btn');
let closeFormBtn = document.querySelector('#close-form');
let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

// Event listener for opening the navbar
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
};

// Event listener for closing the navbar
document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
};

// Event listener for opening the account form
if (accountBtn) {
    accountBtn.onclick = () => {
        accountForm.classList.add('active');
    };
}

// Event listener for closing the account form
if (closeFormBtn) {
    closeFormBtn.onclick = () => {
        accountForm.classList.remove('active');
    };
}

// Event listener for switching to the register form
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        document.querySelector('.account-form .login-form').classList.remove('active');
        document.querySelector('.account-form .register-form').classList.add('active');
    });
}

// Event listener for switching to the login form
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        document.querySelector('.account-form .register-form').classList.remove('active');
        document.querySelector('.account-form .login-form').classList.add('active');
    });
}

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true,
  });

var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
  });

  var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    }
  });

  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
  });



  let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

  accordion.forEach(acco => {
      acco.addEventListener('click', () => {
          if (acco.classList.contains('active')) {
              acco.classList.remove('active');
          } else {
              accordion.forEach(dion => dion.classList.remove('active'));
              acco.classList.add('active');
          }
      });
  });
  

document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.courses .box-container .hide').forEach(show => {
        show.style.display = 'block';
    });
document.querySelector('.load-more .btn').style.display = 'none';
};
