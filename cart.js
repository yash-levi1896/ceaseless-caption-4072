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
        rating.innerText = el.Rating;
        let price = document.createElement('p');
        price.innerText = el.price;
        total += +el.price;
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
            })
        });

        let addTofavBtn = document.createElement('button');
        addTofavBtn.innerText = 'Favorite'
        addTofavBtn.classList.toggle('fav-btn')
        card.append(img, brandName, price, removeBtn, addTofavBtn);
        mainSection.append(card);
        console.log(+el.price);
        document.getElementById('cart-total').innerHTML = total;
    });
}

