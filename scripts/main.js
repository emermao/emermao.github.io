var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/img2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
};

var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

function fixUserName() {
    var myName = prompt('Ingrese su nombre, por favor.');
    localStorage.setItem('nombre', myName);
    myTitle.textContent = 'Mozilla es cool, ' + myName;
}

if (!localStorage.getItem('nombre')) {
    fixUserName();
} else {
    var nameStored = localStorage.getItem('nombre');
    myTitle.textContent = 'Mozilla es chevere, ' + nameStored;
}

myButton.onclick = function(){
    fixUserName();
};
