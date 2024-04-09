window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(audio);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');// here fetching the playing properties that is defined in css.The classList property in JavaScript provides an interface for interacting with the CSS classes of an HTML element. It is essentially an object representing the classes of the element, allowing you to add, remove, toggle, or check for the presence of classes.
  //console.log(key);
  });
  
  function removeTransition(e){
    if(e.propertyName != 'transform') return; // Skip if not transform
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));