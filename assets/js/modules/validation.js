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
        self.setCustomValidationMessages();
    }

    /**
     * Bind events to input elements
     */
    bind() {
        let self = this;

        // Add an invalid listener that 
        self.inputElems.map(item => {
            item.addEventListener('invalid', evt => {
                self.processValidity(item);
            }, false);
        });
    }

    /**
     * Run through each item and check they have a `data-validation-message` attribute.
     * If so, set a custom validation message with that value
     */
    setCustomValidationMessages() {
        let self = this;

        self.inputElems.map(item => {
            self.setCustomValidationMessage(item);
        });
    }

    /**
     * Set a custom validation message if item needs it
     * @param {HTMLElement} item 
     */
    setCustomValidationMessage(item) {
        let self = this;
        
        if(item.hasAttribute('data-validation-message')) {
            item.setCustomValidity(item.getAttribute('data-validation-message'));
        }
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
                self.setCustomValidationMessage(item);
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
            self.checkSiblings(item);
            return;
        }

        // Before we determine it as invalid, check to see if there's a custom error
        if(item.validity.customError) {

            // Now let's check against some states
            if(!item.validity.badInput 
                && !item.validity.patternMismatch 
                && !item.validity.rangeOverflow
                && !item.validity.rangeUnderflow
                && !item.validity.stepMismatch
                && !item.validity.tooLong
                && !item.validity.tooShort
                && !item.validity.typeMismatch
                && !item.validity.valueMissing) {
                
                // It's valid, so process accordingly
                item.setCustomValidity('');
                self.process(item, 'valid');

                self.checkSiblings(item);
                return;
            }
        }

        // If we're here, it's invalid
        self.process(item, 'invalid');
        self.checkSiblings(item);
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

            // Run each item through the processor
            inputElems.map(item => {
                self.processValidity(item);
            });
        }
    }
};