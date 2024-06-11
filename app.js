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

const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                       : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


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


const sections = document.querySelectorAll('section[id]')
console.log(sections);

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

window.addEventListener('scroll', scrollActive)















