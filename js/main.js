document.addEventListener('DOMContentLoaded', function() {

  var message = document.querySelector('.status'),
      button = document.querySelector('.switch'),
      room = document.querySelector('.light'),
      onState = 'on',
      offState = 'off';


      button.addEventListener('click', function(e) {
        if (button.classList.contains(onState)) {
          room.className = "dark";
          button.classList.replace( onState, offState );
          message.innerText = 'It\'s quite dark in here';
        } else {
          room.className = "light";
          button.classList.replace( offState, onState );
          message.innerText = 'It\'s so bright in here!';
        };
      });
});
