(function() {
  function setEvents() {
    //reveal comment textbox if selected
    var radioSelections = document.getElementsByName('selection');
    for (var i = 0; i < radioSelections.length; i++) {
      if (radioSelections[i].id != 'contact-order-info') {
        radioSelections[i].addEventListener('click', () => {
          this.checked = true;
          document.querySelector('.contact-order-problem-text').style.display = 'none';
        });
      } else {
        radioSelections[i].addEventListener('click', () => {
          this.checked = true;
          document.querySelector('.contact-order-problem-text').style.display = 'inherit';
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
  } //
  window.onload = setEvents;
})();
