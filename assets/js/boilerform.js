import Validation from './modules/validation';

(function() {

    // Look for child and root forms 
    const boilerforms = [...document.querySelector('.boilerform form, form.boilerform')];

    if(boilerforms.length) {

        // Add a validator to each form instance
        boilerforms.map(item => {
            let validationInstance = new Validation(boilerform);

            validationInstance.init();
        });  
    }
}());