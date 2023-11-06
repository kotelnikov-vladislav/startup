import { Tabs } from '../mixins/tabs/tabs.js';
import { burger } from './mobile-nav.js';


// Открытие/закрытие навигации для мобильных устройств

burger();

/* Плавное появление элементов при прокрутке */
const checkPageVisibility = sections => {
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionY = section.getBoundingClientRect().top;

        if (sectionY < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const sections = [...document.querySelectorAll('.fade-in-section')];

    checkPageVisibility(sections);

    window.addEventListener('scroll', () => {
        checkPageVisibility(sections)
    });
})

/* Подвижное изображение */
const movingImage = document.getElementById('moving-image');

setInterval(() => {
    movingImage.style.transform = `translate(${0 - Math.random() * 10}px, ${0 - Math.random() * 10}px)`;
}, 100)

/* Табы */
const tab1 = new Tabs(1);
tab1.init();

/* Карусель */
const carousel = document.querySelector('.carousel');
const carouselListItems = carousel.querySelector('.carousel__list-items');
const btnNext = carousel.querySelector('.carousel__next');
const btnBack = carousel.querySelector('.carousel__back');

const scrollCords = [...carouselListItems.children].map(element => {
    return element.offsetLeft;
});
let index = 0;

carouselListItems.scrollTo(0, 0);

btnNext.addEventListener('click', () => {
    index += 1;

    if (index >= scrollCords.length) {
        index = 0;
    }
    
    carouselListItems.scrollTo({
        left: scrollCords[index],
        behavior: 'smooth'
    });

});

btnBack.addEventListener('click', () => {
    index -= 1;
    
    if (index < 0) {
        index = scrollCords.length - 1;
    }
    
    carouselListItems.scrollTo({
        left: scrollCords[index],
        behavior: 'smooth'
    });

});