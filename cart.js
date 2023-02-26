let mainSection = document.getElementById('cards');
let total = 0;

 function fetchData() {
    fetch(`https://mock-apai.onrender.com/cart`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        displayData(data);
    })
};
fetchData();


function displayData (data) {
    mainSection.innerHTML = null;
    data.forEach(el => {
        let x = el.id;
        let card = document.createElement('div');
        card.classList.toggle('card-per-row');
        let img = document.createElement('img');
        img.setAttribute('src', el.image);
        let brandName = document.createElement('p');
        brandName.innerText = el.title;
        let rating = document.createElement('p');
        rating.innerText = 'Rating: '+el.Rating;
        let price = document.createElement('p');
        price.innerText = '$'+el.price;
        let category = document.createElement('p');
        category.innerText = el.category;
        total += (+el.price);

        let removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove'
        removeBtn.classList.toggle('remove-btn');
        removeBtn.addEventListener('click', async function () {
            fetch(`https://mock-apai.onrender.com/cart/${x}`, {
                method: 'DELETE',
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                //displayData(data.data);
                fetchData();
                window.location.reload();
            })
            
        });

        let addTofavBtn = document.createElement('button');
        addTofavBtn.innerText = 'Favorite'
        addTofavBtn.classList.toggle('fav-btn')
        card.append(img, brandName, category, price, removeBtn, addTofavBtn);
        mainSection.append(card);
        document.getElementById('cart-total').innerHTML = 'Cart-Total: $'+total;
    });
}

///// => cart Count => ///
let cart_cout = document.getElementById("cart-cout")
console.log(cart_cout);

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
        if(data.length == 0){
            document.getElementById('header').style.display = 'none';
            document.querySelector('.hide-alert').style.display = 'block';
        }
    })