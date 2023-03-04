'use strict';

// ---------------------- Declaring Document Elements ----------------------

const contactName = document.querySelector('#contact-name');
const contactTel = document.querySelector('#contact-tel');
const contactEmail = document.querySelector('#contact-email');

// ---------------------- Validate Functions ----------------------

// const validName = /[a-zA-Z]/;

contactName.addEventListener('keyup', function() {
    const validName = /[^a-zA-Z\s]/g;
  
    if(validName.test(this.value)) {
      this.value = this.value.replace(validName, "");
    };
});