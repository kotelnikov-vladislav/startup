export const burger = () => {
    const PHONE_WIDTH = 450;
    
    const desktopBurger = document.getElementById('desktop-burger');
    const mobileBurger = document.getElementById('mobile-burger');
    const header = document.getElementById('header');
    
    desktopBurger.addEventListener('click', () => {
        header.classList.add('header--open-menu');
        document.body.classList.add('no-scroll');
    });
    
    mobileBurger.addEventListener('click', () => {
        header.classList.remove('header--open-menu');
        document.body.classList.remove('no-scroll');
    })
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > PHONE_WIDTH) {
            header.classList.remove('header--open-menu');
            document.body.classList.remove('no-scroll');
        }
    })
}