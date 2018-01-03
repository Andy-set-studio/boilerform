export default class Validation {

    constructor(baseForm) {
        this.baseForm = baseForm;
        this.inputElems = [...baseForm.querySelectorAll('input, textarea, select')];
    }

    init() {
        let self = this;

        self.bind();
    }

    bind() {
        let self = this;

        self.inputElems.map(item => {
            item.addEventListener('invalid', evt => {
                self.process(item, 'invalid');
                self.checkSiblings(item);
            }, false);
        });
    }

    process(item, state = 'invalid') {
        let self = this;

        switch(state) {
            case 'invalid':
                item.classList.add('is-error');
                break;
            default: 
                item.classList.remove('is-error');
                break;
        } 
    }

    checkSiblings(item) {
        let self = this;
        let inputElems = self.inputElems.filter(elem => elem != item && elem.hasAttribute('required'));
        
        if(inputElems.length) {

            inputElems.map(item => {

                if(item.validity.valid && item.classList.contains('is-error')) {
                    item.classList.remove('is-error');
                } 
            });
        }
    }
};