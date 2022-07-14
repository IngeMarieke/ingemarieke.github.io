let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        alert('you really have to')
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Welcome to the superstatic web-page of Ingmar, ' + myName;
    }
  }
  
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to the superstatic web-page of Ingmar, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}