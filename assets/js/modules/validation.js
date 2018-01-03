export default class Validation {

    /**
     * Load up an instance of Validation
     * @param {HTMLFormElement} baseForm 
     */
    constructor(baseForm) {
        this.baseForm = baseForm;

        // Load child input elements
        this.inputElems = [...baseForm.querySelectorAll('input, textarea, select')];
    }

    /**
     * Public init method
     */
    init() {
        let self = this;

        self.bind();
    }

    /**
     * Bind events to input elements
     */
    bind() {
        let self = this;

        // Add an invalid listener that 
        self.inputElems.map(item => {
            item.addEventListener('invalid', evt => {
                self.process(item, 'invalid');
                self.checkSiblings(item);
            }, false);
        });
    }

    /**
     * Toggle the visual state of an item based on the based state key
     * @param {HTMLElement} item 
     * @param {String} state 
     */
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

    /**
     * Check an item's siblings validty state
     * @param {HTMLElement} item 
     */
    checkSiblings(item) {
        let self = this;

        // Find siblings that aren't this item and that are required
        let inputElems = self.inputElems.filter(elem => elem != item && elem.hasAttribute('required'));
        
        if(inputElems.length) {

            inputElems.map(item => {

                // If an item is valid, run the processor 
                if(item.validity.valid) {
                    self.process(item, 'valid');
                } 
            });
        }
    }
};