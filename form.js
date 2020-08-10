(function() {
  function setEvents() {
    //reveal comment textbox if selected
    var radioSelections = document.getElementsByName('selection');
    for (var i = 0; i < radioSelections.length; i++) {
      if (radioSelections[i].id !== 'contact-order-info') {
        radioSelections[i].addEventListener('click', () => {
          this.checked = true;
          document.querySelector('.contact-order-problem-text').style.display = 'none';
          document.querySelector('#contact-order-problem-text').required = false;
        });
      } else {
        radioSelections[i].addEventListener('click', () => {
          this.checked = true;
          document.querySelector('.contact-order-problem-text').style.display = 'inherit';
          document.querySelector('#contact-order-problem-text').required = true;
        });
      }
    }

    //scroll up button
    var goUpBtn = document.querySelector('#go-top-btn');
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        goUpBtn.style.display = 'block';
      } else {
        goUpBtn.style.display = 'none';
      }
    });

    //check validity of user input
    let form = document.querySelector('#contact-email-form');
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        // form.classList.add('was-validated');
        event.preventDefault();
        return false;
      }
      return true;
    });

    //some error messages
    let email = document.querySelector('#contact-email-info');
    email.addEventListener('input', () => {
      if (email.validity.patternMismatch) {
        email.setCustomValidity('Enter a valid email! (ie. mbill@example.ca)');
      } else {
        email.setCustomValidity('');
      }
    });

    let emailSub = document.querySelector('#email-subscription');
    emailSub.addEventListener('input', () => {
      if (emailSub.validity.patternMismatch) {
        emailSub.setCustomValidity('Enter a valid email! (ie. mbill@example.ca)');
      } else {
        emailSub.setCustomValidity('');
      }
    });

    let postalCode = document.querySelector('#contact-postal-code-info');
    postalCode.addEventListener('input', () => {
      if (postalCode.validity.patternMismatch) {
        postalCode.setCustomValidity('Enter a valid Canadian Postal Code! (ie. M2R 4K5)');
      } else {
        postalCode.setCustomValidity('');
      }
    });
  } //
  window.onload = setEvents;
})();
