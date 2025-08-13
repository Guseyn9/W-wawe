let searchIcon = document.querySelector('.open-search-icon');
let searchOpened = document.querySelector('.header__search-opened');
let search = document.querySelector('.header__search');
let closeIcon = document.querySelector('.header__search-opened-btn__close-icon');

searchIcon.addEventListener('click',
	function() {
		searchOpened.classList.remove('not-visible');
	});

closeIcon.addEventListener('click',
	function() {
		searchOpened.classList.add('not-visible');
});

let openBtn = document.querySelector('.header__btn');
let modalWindow = document.querySelector('.modal-window');
let modalClose = document.querySelector('.modal-window__close-btn');
let body = document.querySelector('body');

openBtn.addEventListener('click',
	function() {
		modalWindow.classList.remove('hidden');
		body.classList.add('fixed');
});

modalClose.addEventListener('click',
	function() {
		modalWindow.classList.add('hidden');
		body.classList.remove('fixed');
});

let stop = document.querySelector('.header-btn2__icon2');
let play = document.querySelector('.header-btn2__icon');
let stop2 = document.querySelector('.header-btn2__icon4');
let play2 = document.querySelector('.header-btn2__icon3');
let btn = document.querySelectorAll('.header__btn2');

stop.addEventListener('click', function() {			
	stop.classList.add('header-btn2-icon2__style');
	play.classList.remove('header-btn2__icon');
});

play.addEventListener('click', function() {	
	stop.classList.remove('header-btn2-icon2__style');
	play.classList.add('header-btn2__icon');
});

stop2.addEventListener('click', function() {			
	stop2.classList.add('header-btn2-icon2__style');
	play2.classList.remove('header-btn2__icon3');
});

play2.addEventListener('click', function() {	
	stop2.classList.remove('header-btn2-icon2__style');
	play2.classList.add('header-btn2__icon3');
});

new JustValidate('.modal-window__form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 20,
		},
		tel: {
			required: true,
			minLength: 8,
			maxLength: 20,
		},
	},
	messages: {
		name: {
			required: "Вы не ввели логин",
			minLength: "Введите достаточное количество символов",
			maxLength: "Вы ввели больше чем положено"
		},
		tel: {
			required: "Вы не ввели пароль",
			minLength: "Введите достаточное количество символов",
		},
	},
});

// let pause = document.querySelectorAll('.podcasts-item__svg');
// let playBtn = document.querySelectorAll('.podcasts-item__svg2');

// pause.forEach(function (el) {
// 	el.addEventListener('click', function (e) {
// 		const target = e.currentTarget.dataset.path;
// 		pause.forEach(function (element) { element.classList.add('podcasts-item__svg-style')});
// 		e.currentTarget.classList.remove('podcasts-item__svg-style');
// 		playBtn.forEach(function (elem){ elem.classList.remove('podcasts-item__svg2--active')});
// 		document.querySelector(`[data-target="${path}"]`).classList.add('podcasts-item__svg2--active');
// 	});
// });

// playBtn.forEach(function (el) {
// 	el.addEventListener('click', function (elem) {
// 		const target2 = elem.currentTarget;
// 		elem.currentTarget.classList.remove('podcasts-item__svg-style');
// 		elem.currentTarget.classList.add('podcasts-item__svg2--active');
// 	});
// });

// pause.addEventListener('click', function () {
// 		playBtn.classList.remove('podcasts-item__svg2--active');
// 		pause.classList.add('podcasts-item__svg-style');
// 	});

// playBtn.forEach(function (el) {
// 	el.addEventListener('click', function () {
// 		playBtn.classList.add('podcasts-item__svg2--active');
// 		pause.classList.remove('podcasts-item__svg-style');
// 	});
// });

const item = document.querySelectorAll('.podcasts__item');
const podcastsBtn = document.querySelector('.podcasts-item__btn');

podcastsBtn.addEventListener('click', () => {
		podcastsBtn.closest('.podcasts__btn').classList.add('podcasts__btn-style')
		item.forEach(el => { el.classList.remove('podcasts__item-style') });
});

const element = document.querySelector('.transfers__select');
const choices = new Choices(element, {
	searchEnabled: false
});

let choices2 = document.querySelector('.choices');

new Accordion('.accordion');

// let guestItem = document.querySelectorAll('.guest__item');
// let guestSvg = document.querySelectorAll()

let tabsLink = document.querySelectorAll('.tabs-nav__link');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsLink.forEach(function(element){
	element.addEventListener('click', function(e){
		const path = e.currentTarget.dataset.path;

		tabsLink.forEach(function(link){ link.classList.remove('tabs-nav__link--active')});
		e.currentTarget.classList.add('tabs-nav__link--active');

		tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
		document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
	});
});

new JustValidate('.about-us__form', {
	rules: {
		name: {
			required: true,
			minLength: 2,
			maxLength: 20,
		},
		mail: {
			required: true,
			email: true
		},
	},
	messages: {
		name: {
			required: "Вы не ввели имя",
			minLength: "Введите достаточное количество символов",
			maxLength: "Вы ввели больше чем положено"
		},
		mail: {
			required: "Вы не ввели email",
			email: "Введите действительный email"
		},
	},
});

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',	
//   loop: true,
//   direction: 'horizontal',
//   allowTouchMove: false,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   uniqueNavElements: false,
// });

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	slidesPerGroup: 4,
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 30,
   breakpoints: {
   	// 320: {
   	// 	slidesPerView: 2,
   	// 	slidesPerGroup: 2,
   	// },
   	1312: {
   		slidesPerView: 4,
   		slidesPerGroup: 4,
   	}
   }
});