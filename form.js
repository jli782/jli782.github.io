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
  } //
  window.onload = setEvents;
})();
