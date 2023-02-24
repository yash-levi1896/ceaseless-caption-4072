//// => Buttons => /////
let addressBtn = document.querySelector('.address-bar');
let cardBtn = document.querySelector('.card-pay');
let upiBtn = document.querySelector('.upi-pay');
let codBtn = document.querySelector('.cod-pay');

/// => input Buttons => ////
let addressInput = document.getElementById('address-input');
let cardInput = document.getElementById('card-input');
let upiInput = document.getElementById('upi-input');
let codInput = document.getElementById('cod-input');


addressBtn.addEventListener('click', function () {
    cardInput.style.display = 'none';
    upiInput.style.display = 'none';
    codInput.style.display = 'none';
    addressInput.style.display = 'block';
});

cardBtn.addEventListener('click', function () {
    cardInput.style.display = 'block';
    upiInput.style.display = 'none';
    codInput.style.display = 'none';
    addressInput.style.display = 'none';
});

upiBtn.addEventListener('click', function () {
    cardInput.style.display = 'none';
    upiInput.style.display = 'block';
    codInput.style.display = 'none';
    addressInput.style.display = 'none';
});

codBtn.addEventListener('click', function () {
    addressInput.style.display = 'none';
    cardInput.style.display = 'none';
    upiInput.style.display = 'none';
    codInput.style.display = 'block';
});

