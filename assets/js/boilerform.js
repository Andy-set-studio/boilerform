import Validation from './modules/validation';

// Import Sass so that webpack picks it up
require('../scss/boilerform.scss');

(function() {

    // Look for child and root forms 
    const boilerforms = [...document.querySelectorAll('.boilerform form, form.boilerform')];
    
    if(boilerforms.length) {

        // Add a validator to each form instance
        boilerforms.map(item => {
            let validationInstance = new Validation(item);

            validationInstance.init();
        });  
    }
}());
