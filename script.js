var btn = document.querySelector('.headerSection__btn--click');
var mainSection = document.querySelector('.mainSection');
var number = 1;


var addElement = function () {
    var pickedNumber = parseInt(document.querySelector('.inputTxt__input--number').value);
    var pickedShape = document.querySelector('.inputTxt__input--shape').value;
    var pickedColor = document.querySelector('.inputTxt__input--color').value;
    if ([1,2,3,4,5,6,7,8,9].indexOf(pickedNumber) === -1 
    || ['circle','square','rectangle','ellipse'].indexOf(pickedShape) === -1 
    || ['red','green','blue','white'].indexOf(pickedColor) === -1 ) {
        alert('Pick from the lists :)');

    } else {
    var div = document.createElement('div');
    div.textContent = number;
    mainSection.appendChild(div);
    if (number % pickedNumber === 0) {
        div.classList.add('mainSection__btn--diff',`${pickedShape}`,pickedColor);
    } else {
        div.classList.add('mainSection__btn--each');
    }
    number++;
}
}
btn.addEventListener('click', addElement)