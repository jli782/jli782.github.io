/* Add any JavaScript you need to this file. */
(function() {
  function setEvents() {
    var inventory = document.querySelectorAll('.item');

    //show all
    function showAll() {
      inventory.forEach(i => {
        i.style.display = 'block';
      });
    }
    //hide
    function hide() {
      inventory.forEach(i => {
        i.style.display = 'none';
      });
    }

    //all items
    var allItems = document.querySelector('#all-items');
    allItems.addEventListener('click', () => {
      showAll();
    });

    //home
    document.querySelector('#home').addEventListener('click', () => {
      showAll();
      document.querySelector('.active').className = 'menu-selection';
      document.querySelector('#all-items').className = 'menu-selection active';
    });

    //rods only
    document.querySelector('#a-rods').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.rod').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#deep-rods').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.deep-rod').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#fresh-rods').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.fresh-rod').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#fly-rods').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.fly-rod').forEach(i => {
        i.style.display = 'block';
      });
    });

    //tackle only
    document.querySelector('#a-lines').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.tackle').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#hooks').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.t-hook').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#floats').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.t-float').forEach(i => {
        i.style.display = 'block';
      });
    });

    //reels only
    document.querySelector('#a-reels').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.reel').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#reels-amateur').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.cas-reel').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#reels-pro').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.pro-reel').forEach(i => {
        i.style.display = 'block';
      });
    });

    //lures only
    document.querySelector('#a-bait').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.bait').forEach(i => {
        i.style.display = 'block';
      });
    });

    document.querySelector('#bait-artificial').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.f-bait').forEach(i => {
        i.style.display = 'block';
      });
    });
    document.querySelector('#bait-live').addEventListener('click', () => {
      hide();
      document.querySelectorAll('.o-bait').forEach(i => {
        i.style.display = 'block';
      });
    });

    //scroll up button
    var goUpBtn = document.querySelector('#go-top-btn');
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        goUpBtn.style.display = 'block';
      } else {
        goUpBtn.style.display = 'none';
      }
    });

    document.querySelector('#foot-to-home').addEventListener('click', () => {
      showAll();
      document.querySelector('.active').className = 'menu-selection';
      document.querySelector('#all-items').className = 'menu-selection active';
    });

    //highlight button of current link
    var menuBtn = document.querySelectorAll('.menu-selection');
    for (var i = 0; i < menuBtn.length; i++) {
      menuBtn[i].addEventListener('click', function() {
        menuBtn.forEach(i => {
          i.className = 'menu-selection';
        });
        this.className = 'menu-selection active';
      });
    }

    //at start hight all items
    document.querySelector('#all-items').className = 'menu-selection active';

    //error message for email form
    let emailSub = document.querySelector('#email-subscription');
    emailSub.addEventListener('input', () => {
      if (emailSub.validity.patternMismatch) {
        emailSub.setCustomValidity('Enter a valid email! (ie. mbill@example.ca)');
      } else {
        emailSub.setCustomValidity('');
      }
    });
  } //
  window.onload = setEvents;
})();
