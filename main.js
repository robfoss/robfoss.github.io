let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lion.jpg') {
      myImage.setAttribute ('src','images/lion2.jpg');
    } else {
      myImage.setAttribute ('src','images/lion2.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
      setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Lions are awesome, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Lions are awesome, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }