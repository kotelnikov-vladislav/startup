class PDC {
    constructor(id) {
        this.component = document.getElementById(`pdc-${id}`);
        this.contents = [...this.component.children];
    }

    alignСontentHeight() {
        let maxHeight = 0;

        this.contents.forEach((content) => {
            const contentHeight = content.getBoundingClientRect().height;

            if (contentHeight > maxHeight) {
                maxHeight = contentHeight;
            }
        });

        this.component.style.height = `${maxHeight}px`;
    }

    hideAllElements() {
        for (const element of this.component.children) {
            element.classList.remove('pdc__content--show');
            element.classList.remove('pdc__content--visible');
        }
    }

    showElement(index) {
        this.hideAllElements();
        this.contents[index].classList.add('pdc__content--show');

        setTimeout(() => {
            this.contents[index].classList.add('pdc__content--visible');
        }, 1)
    }
}

export class Tabs {
    constructor(id) {
        this.component = document.getElementById(`tabs-${id}`);
        this.btns = [...this.component.querySelectorAll('.tabs__tab button')];
        this.underline = this.component.querySelector('.tabs__underline');
        this.pdc = new PDC(id);
    }

    init() {
        this.underline.style.width = `${100 / this.btns.length}%`;
        this.pdc.alignСontentHeight();

        window.addEventListener('resize', () => {
            this.pdc.alignСontentHeight();
        });
        
        for (let i = 0; i < this.btns.length; i += 1) {
            const btn = this.btns[i];
            
            btn.addEventListener('click', () => {
                this.underline.style.left = `${btn.getBoundingClientRect().width * i}px`;
    
                this.pdc.showElement(i);
            });
        }
    }
}