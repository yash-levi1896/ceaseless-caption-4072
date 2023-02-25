document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  

// for bottom carosal

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// end scroller


// const productContainers2 = [...document.querySelectorAll('.product-container2')];
// const nxtBtn1 = [...document.querySelectorAll('.nxt-btn')];
// const preBtn1 = [...document.querySelectorAll('.pre-btn')];

// productContainers2.forEach((el, j) => {
//     let containerDimensions2 = el.getBoundingClientRect();
//     let containerWidth1 = containerDimensions2.width;

//     nxtBtn1[j].addEventListener('click', () => {
//         el.scrollLeft += containerWidth1;
//     })

//     preBtn1[j].addEventListener('click', () => {
//         el.scrollLeft -= containerWidth1;
//     })
// })

let cart_cout = document.getElementById("cart-cout")


    fetch(`https://mock-apai.onrender.com/cart`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        cart_cout.textContent=data.length;
    })


