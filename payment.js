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

//// => Payment Button => ////
let addressSaveBtn = document.getElementById('address-btn');
let cardPayBtn = document.getElementById('card-btn');
let upiPayBtn = document.getElementById('upi-btn');
let codPayBtn = document.getElementById('cod-btn');

// function display() {
//        document.getElementById('pay-fun').style.display = 'block';
//        document.querySelector('.header').style.display = 'none';
//        setTimeout(() => {
//         document.getElementById('pay-fun').style.display = 'none';
//        document.querySelector('.header').style.display = 'block';        
//        }, 1000);

//        setTimeout(() => {
//         document.getElementById('pay-fun').style.display = 'block';
//         document.querySelector('.header').style.display = 'block';
//        }, 1500);
// }

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


addressSaveBtn.addEventListener('click', function () {
    alert('Your Address has been saved.');
});

cardPayBtn.addEventListener('click', function () {
    if(
        document.getElementById('numberinput').value==''||
        document.getElementById('nameinput').value==''||
        document.getElementById('month').value==''||
        document.getElementById('cvv').value==''
        )
        {
        alert('wrong credential.')
    }else{
        alert('Your Order has been placed.')
        setTimeout(() => {
            window.location.href='index.html'
        }, 1000);
    }
    let x = document.getElementById('numberinput').value;
    console.log(x);
});

upiPayBtn.addEventListener('click', function () {
    if(document.getElementById('upiInput').value == ""){
        alert('wrng credential.')
    }else{
        alert('Your Order has been placed.')
        setTimeout(() => {
            window.location.href='index.html'
        }, 1000);
    }
});

codPayBtn.addEventListener('click', function () {
    alert('Your Order has been placed.')
        setTimeout(() => {
            window.location.href='index.html'
        }, 1000);
})