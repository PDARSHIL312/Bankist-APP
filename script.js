'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~186(Selecting , creating , Deleting Elements)~~~~~~~~~~~~~~~~
/*
console.log(document.documentElement); // For Selecting entire document here documentElement is use // e.x if i want to apply css on the entire page than documentElement is used!! 
// In sort documentElement is used for selection of more than one element kind of i can say!!!!!!
// document is not real DOM element

console.log(document.head);
console.log(document.body);

// selection of class
console.log(document.querySelector('.section'));
console.log(document.querySelectorAll('.section'));
const header = document.querySelector('.header');

// for Id
document.getElementById('section--1');  // return Node List
const allButtons = document.getElementsByTagName('button');  // all elment by name of button will be their
// It will return HTMLCollection rather than node List
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // no require of  '.' here in front of class name

// Creating  And Inserting Elements

// One Method which is used in banker web
// containerMovements.insertAdjacentHTML('afterbegin', html);

const message = document.createElement('div'); //  Here this one written a DOM element so i need to store it
// SO here message that represents a DOM element
message.classList.add('cookie-message');
// message.textContent = 'We Use cokied for improved functionality and ...' ; // like wise i can add this as usal i know
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// here textContent and innerHTML are used for read and set Content
// header.prepend(message);  // prepand add as the first child of header element
 header.append(message); // here it will add as last child of header element

// here all above apeend and prepand is passing only one time but if i want multiple pass on it!!!!
// header.append(message.cloneNode(true)); //here it will clone it and returns clones

header.before(message);  // it will insert message before header element
// header.after(message); // it will insert message after header element

// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click' , function(){
  message.remove();  // recently come
  // old way
  // message.parentElement.removeChild(message);
});
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~187(Styles , Attributes and Classes)~~~~~~~~~~~~~~~~~~~~~~~~
/*
// from 186
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We Use cokied for improved functionality and ...'; 
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); 
  });

// For 187
//~~~Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);   // Here it will Show A blank
// so reason behind this one is style property here is works for only inline styles propery e.x.
console.log(message.style.backgroundColor);

// So Here if i want to get property height so how i can i get.....
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height ,10 )+  20 + 'px';

document.documentElement.style.setProperty('--color-primary', 'skyblue');
// so By Set Property I can change the color of any Property

//~~~Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);  // alt is memeber of the nav__logo
console.log(logo.src);
console.log(logo.className);
console.log(logo.designer);  // here It Will through error because it is not standard property of ant img so...\
// So if i wanted to know about designer than how i can do that ??
console.log(logo.getAttribute('designer')); // so here i need to use getAttribute() property so...

// ican change it also
logo.alt = 'Beautiful minimalist logo';

// ican add attributes also
logo.setAttribute('company' , 'Bankist')

// for absolute ammmm .. see below
console.log(logo.src);
console.log(logo.getAttribute('src'));

//Data Attributes    is a special type of attribute whcih start with  named as "data....""    
console.log(logo.dataset.versionNumber);  //  i write attribute like data-version-number  so here camel case require in name at JS

//~~~~classes
logo.classList.add('c');  // ican pass multiple classes in this four 
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~188(Implimenting Smooth Scrolling)~~~~⚠️⚠️⚠️ (did Not Understand Old Method new Method only of One Linear)~~~~~~~~~~~~~~~~~~~~

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Old Way for Scrolling .......
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect()); // e means btnScrollTo
  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left :s1coords.left + window.pageXOffset,
  //   top :s1coords.top + window.pageYOffset,
  //   behavior : 'smooth',
  // });

  //⭐⭐⭐⭐~ Latest Version of this one // Importanat and easy than above self counting and other extra stuff!!!!
  section1.scrollIntoView({ behavior: 'smooth' });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~189 (Types Of Events And Event Handler)~~~~~~~~~~~~~~~~~~~~
/*
const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter' , function(e) {
// alert('addEventListener : Great! you are reading the heading :)');
// });

// Ammm Here one property for direct mouseenter and that one is....
//=> h1.onmouseenter = function(e) {
// alert('addEventListener : Great! you are reading the heading :)');
// };

//=> So Here for All events their are ONEVENT propertys are available  here for click and for other also
// But this onevent Propertys are basically used in old browsers and their are advantage on usage of the 
//addEventListener 
//1) this one allows to add multiple listners to same event but in onevent it will override old one 
// 2) i can remove event handler in case of i do not want anymore ..

const alert1 = function (e) {
  alert('addEventListener : Great! you are reading the heading :)');

  // h1.removeEventListener('mouseenter' , alert1);  // so after one usage i can close event listner but in case of the onevent i can not do anything 
};

h1.addEventListener('mouseenter' , alert1);
 // or i can remove it after certain time also  ex

setTimeout(() => h1.removeEventListener('mouseenter' , alert1), 3000);  // so like wise i can use and timer for it!!!!!!!!!!!

//=> Third method is to apply direct on the HTML ...

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~190 (Event Propagation : Bubbling And capturing  // theory)~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~191 (Event Propagation : Bubbling And capturing)~~~~~~~~~~~~~~~~~~~~~
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) 
{
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);  // e.target means where the event is originating from
  // here if button: features is selected than event will generated at feature but here it will also handlle the other paraent event with it same no other event is create for this one
  // e.target means at where for event is happening 
  // though for all parents of 'Feature' the Target is one Nav__Link
  // but here current target is different for all like for nav__links it self as currenttareget but e.Target is nav__link
  // so like wise...
  // so It is call as Event Propogation  i can also stop it if i wanted
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~192 (Event Delegation : Implementing Page Navigation)~~~~~~~~~~~~~~~~~~~~~

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();   // this is used because here browser it self having scrolling so i need to avoid it
//     const id = el.getAttribute('href'); // i can use this also instead of 'el'
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//       });
// });

// But but but in above method for each time new bubble up and so efficiency is reduced if their are 1000 of this buttons than ??? that make more complecation so here
// event delegation is used see below like this i can use it

// for event delegation i will use parent one so that now i can go in their many places see below
document.querySelector('.nav__links').addEventListener('click', function (e) {
  // .nav__links refres to parent of all buttons in header so..
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    // for limitaation on usage ammm like in parent their are many more othere things but i only apply this one on this perticulat links so i do this
    const id = e.target.getAttribute('href'); // here e.target is required
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~193 (DOM Traversing)~~~~~~~~~~~~~~~~~~~~~
/*
//walking through DOM // Here i can select element baased on other element
// direct file , if do not not structure of DOm than i need DOM Traversing

const h1 = document.querySelector('h1');

// Going downwards: child 
console.log(h1.querySelectorAll('.highlight'));  // means it will select all children of the highlight
console.log(h1.childNodes);  // It will return all nodes // it will work for direct children only
console.log(h1.children);// It will return all Element
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);   // nodes
console.log(h1.parentElement);  // element

// So Basically it will 
// i need to find parent node nomattr how far away that from h1 so i need to use closet method
h1.closest('.header').style.background = 'var(--gradient-secondary)';   // so basically here 
h1.closest('h1').style.background = 'var(--gradient-primary)';
// so basically closet does opposite work than queryselector because queryselector will select children of given query string no matter how much deep child is
// and closet is selecting parent of given  query-string no matter ho far is that one 

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~194 (BUILDING A TABBED COMPONENT)~~~~~~~~~~~~~~~~~~~~~

// i will use parent for selecting child button
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard caluses
  if (!clicked) return;

  // Activate tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active');

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~195 (Passing Argument TO Event Handler)~~~~~~~~~~~~~~~~~~~~~
const handlerHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // so basicalkly here
    // first link is nav__link means buttons than i go to upward side to the parent .nav so here .nav will select whole thing
    //and than in that i choose again nav__link
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = this; //  this keyword is opacity; because of bind method
      }
    });
    logo.style.opacity = this; // opacity
  }
};
//i can't  put handlerHover instead of function(e) because  here handler..  call function that i do not want...
// nav.addEventListener('mouseover', function (e) {
//      handlerHover(e , 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//    handlerHover(e ,1);
// });

nav.addEventListener('mouseover', handlerHover.bind(0.5));
nav.addEventListener('mouseout', handlerHover.bind(1));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~196(Implementing a sticky Navigation : the scroll event)~~~~~~~~~~~~~~~~~~~~~
// Scroll Navigation

/*
const intialCoords = section1.getBoundingClientRect();

// here sticky ele is available in to window so....
window.addEventListener('scroll', function () {
  if (window.scrollY > intialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~197(A Better Way : The Intersection Observer API)~~~~~~~~~~~~~~~~~~~~~
// sticky navigation: By Intersection observer API

// const obsCallback = function(){};
// const obsOptions = {};  //option

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // in percentage
  rootMargin: `-${navHeight}px`, // Here it will avoke this before 90pc
});

headerObserver.observe(header);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~198(Revealing elements on scroll)~~~~~~~~~~~~~~~~~~~~~
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~199(Lazy Loading Images)~~~~~~~~~~~~~~~~~~~~~
const imgTargets = document.querySelectorAll('img[data-src]'); // selection of img which have data propety data-src

const loadImg = function (entires, observer) {
  const [entry] = entires; // entries = entries[0]
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace Source with data-src
  entry.target.src = entry.target.dataset.src; // so ⭐data type resource can write like this as see hete dataset.... if data-src-img than dataset.srcImg like wise
  // So basically here after finishing uploading task by current entry.target emites the load event
  // so that loaing happning now if i write code for removing blur after this one ,one prob occure and that is
  // main moto is first new img and remove blur but if i write dirctly than before finishing of load event blur will be remove so that not happen so below one event handler is call
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0, // o percentage
  // rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~200(Building a Slider Component part-I)~~~~~~~~~~~~~~~~~~~~~

/*
// does Not work idk  see in lec 201 that code is running
 const slider = document.querySelector('.slider'); // it is section class
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
const maxSlide = slides.length;
let curSlide = 0;

// slider.style.transfrom = 'scale(0.4) translateX(-800px)'; // does not work idk why?/
// slider.style.overflow = 'visible';
// slides.forEach((s, i) => (s.style.transfrom = `translateX(${100 * i}%)`));  // Here it will work by function like...
// slider.style.transfrom = 'scale(0.5)';

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transfrom = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);

};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);

};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~201(Building a Slider Component part-II)~~~~~~~~~~~~~~~~~~~~~

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~202(Lifecycle DOM Events)~~~~~~~~~~~~~~~~~~~~~

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// generally do not use below functions
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
