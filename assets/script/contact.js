'use strict';

// ---------------------- Declaring Document Elements ----------------------

const contactName = document.querySelector('#contact-name');
const contactTel = document.querySelector('#contact-tel');
const contactEmail = document.querySelector('#contact-email');
const sendBtn = document.querySelector('#send');

// ---------------------- Validate Functions ----------------------

// const validName = /[a-zA-Z]/;

contactName.addEventListener('keyup', function() {
    const validName = /[^a-zA-Z\s]/g;
  
    if(validName.test(this.value)) {
      this.value = this.value.replace(validName, "");
    };
});

contactTel.addEventListener('keyup', function() {
    const validTel = /[^0-9() -]/g;
  
    if(validTel.test(this.value)) {
      this.value = this.value.replace(validTel, "");
    };
});

sendBtn.addEventListener('click', function(event) {
    const validEmail = /\.com$/;

    if (validEmail.test(contactEmail.value)) {
        return true;
    } else {
        alert("Please add a valid email ending in \".com\"");
        event.preventDefault();
    };
});