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
            item.addEventListener('invalid', () => {
                self.processValidity(item);
            }, false);
        });
    }

    /**
     * Toggle the visual state of an item based on the based state key
     * @param {HTMLElement} item 
     * @param {String} state 
     */
    process(item, state = 'invalid') {

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
     * Run some checks to determine if the passed item is valid or not
     * @param {HTMLElement} item 
     */
    processValidity(item) {
        let self = this;

        // If an item is valid, run the processor and bail
        if(item.validity.valid) {
            self.process(item, 'valid');
            return;
        }

        // If we're here, it's invalid
        self.process(item, 'invalid');
    }
};
