const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu') 
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const blurHeader = () => {
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader);

// const scrollUp = () => {
//    const scrollUp = document.getElementById('scroll-up')
//    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
//                        : scrollUp.classList.remove('show-scroll')

//    const scrollUpLInk = document.getElementById('telegram-up')
// }

// window.addEventListener('scroll', scrollUp)

// const scrollUpLink = () => {
//    const scrollUpLInk = document.getElementById('telegram-up')
//    this.scrollY >= 350 ? scrollUpLInk.classList.add('show-scroll-link')
//                        : scrollUpLInk.classList.remove('show-scroll-link')
// }

// window.addEventListener('scroll', scrollUpLink)

const handleScroll = () => {
   const scrollY = window.scrollY;
   const scrollUp = document.getElementById('scroll-up');
   const scrollUpLink = document.getElementById('telegram-up');

   if (scrollY >= 350) {
       scrollUp.classList.add('show-scroll');
       scrollUpLink.classList.add('show-scroll-link');
   } else {
       scrollUp.classList.remove('show-scroll');
       scrollUpLink.classList.remove('show-scroll-link');
   }
};

window.addEventListener('scroll', handleScroll);


const accordionItems = document.querySelectorAll('.content-plain__item');
accordionItems.forEach((item) => {
   const accordionHeader = item.querySelector('.content-plain__header');
   accordionHeader.addEventListener('click', () => {
      const openItem = document.querySelector('.accordion-open')
      toggleItem(item)

      if(openItem && openItem!= item){
         toggleItem(openItem)
      }
   })
})

const toggleItem = (item) => {
   const accordionContent = item.querySelector('.content-plain__content')
   if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
   }else {
   accordionContent.style.height = accordionContent.scrollHeight + 'px';
   item.classList.add('accordion-open')
   }
}


const sections = document.querySelectorAll('section[id]');

function scrollActive() {
   const scrollY = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      }else{
         document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
   })
}

window.addEventListener('scroll', scrollActive);

document.addEventListener('DOMContentLoaded', function() {
   var dialog = document.getElementById('myDialog');
   var video = document.getElementById('myVideo');


   // document.getElementById('showDialog').addEventListener('click', function() {
   //   dialog.showModal();
   // });

   document.getElementById('showDialog_2').addEventListener('click', function() {
      dialog.showModal();
    });

   document.getElementById('closeDialog').addEventListener('click', function() {
     if (video) {
       video.pause();
       video.currentTime = 0;  // Скидає відео до початку
     }
     dialog.close();
   });

   dialog.addEventListener('close', function() {
     if (video) {
       video.pause();
       video.currentTime = 0;  // Скидає відео до початку
     }
   });
 });


 document.addEventListener("DOMContentLoaded", function () {
   let countdown = document.getElementById("countdown");
   let button = document.getElementById("button");
   let text = document.querySelector('.text');
   let counter = parseInt(countdown.innerText);
   let isCountdownStarted = false;

   window.addEventListener('scroll', function() {
     const target = document.getElementById("target");
     const targetPosition = target.getBoundingClientRect().top;
     const windowHeight = window.innerHeight;

     if (targetPosition < windowHeight && !isCountdownStarted) {
       isCountdownStarted = true;
       const intervalId = setInterval(() => {
         if (counter > 0) {
           counter--;
           countdown.innerText = counter;
         } else {
           clearInterval(intervalId);
           button.style.display = "block";
           countdown.style.display = "none";
           text.style.display = "none";
         }
       }, 1000);
     }
   });
 });


 const swiper = new Swiper('.swiper', {
   loop: true,
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   spaceBetween: "40",
   coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true
   },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false
   },
   pagination: {
     el: '.swiper-pagination',
   },
 });





document.addEventListener("DOMContentLoaded", function() {
   const elements = document.querySelectorAll('.card');

   const observer = new IntersectionObserver(entries => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               entry.target.classList.add('visible');
           } else {
               entry.target.classList.remove('visible');
           }
       });
   }, {
       threshold: 0.2 
   });

   elements.forEach(element => {
       observer.observe(element);
   });
});


