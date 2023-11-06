import { burger } from './mobile-nav.js';


// Открытие/закрытие навигации для мобильных устройств

burger();

// --- CONF SELECT ---

// conf-bool-select
class ConfBoolSelect {
    constructor(id) {
        this.element = document.getElementById(id);
        this.name = this.element.dataset.name;
        this.options = [...this.element.children];
        this.showOption = this.options[0];
    }

    hideAllOptions() {
        this.options.forEach(option => {
            option.classList.remove('conf-bool-select__option--select');
        });
    };

    getValue() {
        return Number(this.showOption.dataset.price) || 0;
    }

    init(fn) {
        fn();

        this.options.forEach(option => {
            option.addEventListener('click', () => {
                this.hideAllOptions();
                this.showOption = option;
                option.classList.add('conf-bool-select__option--select');
                fn();
            })
        }) 
    }
}

class ConfIntSelect {
    constructor(id) {
        this.element = document.getElementById(id);
        this.btnDec = this.element.querySelector('.conf-int-select__btn--dec');
        this.btnInc = this.element.querySelector('.conf-int-select__btn--inc');
        this.input = this.element.querySelector('input');
        this.name = this.element.dataset.name;
    }

    getValue() {
        return Number(this.input.value) || 0;
    }

    init(fn) {
        fn()

        this.btnDec.addEventListener('click', () => {
            this.input.value = this.getValue() - 1;
            fn();
        })

        this.btnInc.addEventListener('click', () => {
            this.input.value = this.getValue() + 1;
            fn();
        })

        this.input.addEventListener('change', () => {
            fn();
        })
    }
}

class OrderPriceCalculator {
    constructor(id) {
        this.element = document.getElementById(id);
        this.priceComponents = {};
        this.calcPrice = () => 0;
    }

    displayPrice() {
        const intl = new Intl.NumberFormat()
        const price = this.calcPrice(this.priceComponents);
        this.element.innerText = `Итоговая стоимость - ${intl.format(price)} руб.*`;
    }

    registrPriceFormula(fn) {
        this.calcPrice = fn;
    }

    registrSelect(select) {
        select.init(() => {
            this.priceComponents[select.name] = select.getValue();
            this.displayPrice();
        })
    }
}

const orderPriceCalculator = new OrderPriceCalculator('total-price');

orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-1'));
orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-2'));
orderPriceCalculator.registrSelect(new ConfBoolSelect('bool-select-3'));
orderPriceCalculator.registrSelect(new ConfIntSelect('int-select-1'));


orderPriceCalculator.registrPriceFormula((priceComponents) => {
    let totalPrice = 0;

    totalPrice += priceComponents['site-development'];
    totalPrice += priceComponents['content-creation'];
    totalPrice += priceComponents['website-promotion'];
    totalPrice *= priceComponents['count-pages'];

    return totalPrice;
})


// --- auto font size ---
const autoReduceFontSize = (element, baseFontSise, padding) => {
    const parent = element.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    const elementWidth = element.getBoundingClientRect().width;

    if (elementWidth + padding * 2 <= parentWidth) {
        return;
    }
    
    element.style.fontSize = `${baseFontSise - 1}px`;
    autoReduceFontSize(element, baseFontSise - 1, padding);
};

const labelElemenets = [...document.querySelectorAll('.auto-fs-label')];
const priceElemenets = [...document.querySelectorAll('.auto-fs-price')];

labelElemenets.forEach(element => autoReduceFontSize(element, 18, 10));
priceElemenets.forEach(element => autoReduceFontSize(element, 16, 10));

window.addEventListener('resize', () => {
    labelElemenets.forEach(element => autoReduceFontSize(element, 18, 10));
    priceElemenets.forEach(element => autoReduceFontSize(element, 16, 10));
});