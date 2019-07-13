var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/straw-hat-crew.jpeg') {
        myImage.setAttribute ('src', 'images/straw-hat-crew-2.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/straw-hat-crew.jpeg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUsername() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName); //store a data called name, setting the value to myName
    myHeading.textContent = 'The Straw Hat is cool! ' + myName;
}

if(!localStorage.getItem('name')) {
    setUsername();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Straw Hat is cool! ' + storedName;
}

myButton.onclick = function() {
    setUsername();
}