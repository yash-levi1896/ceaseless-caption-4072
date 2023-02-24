let container=document.querySelector(".container")
let btncontainer=document.querySelector(".buttonwarpper");
let total=document.getElementById("total-product")
const popup = document.querySelector(".popup");
console.log(container)

window.addEventListener("load",()=>{
    fetchAndRender()
})



function fetchAndRender(){
 fetchdata(1)
 async function fetchdata(page){
     let res = await fetch(`https://mock-apai.onrender.com/toys?_page=${page}&_limit=16`);
     let totalProduct=res.headers.get("x-total-count");
     total.textContent=totalProduct
     let data=await res.json();
     display(data,totalProduct)
 }
}
let cardId;
/* <form>
          <input type="text" placeholder="id" id="card-id">
          <input type="text" placeholder="title" id="card-title">
          <input type="text" placeholder="category" id="card-category">
          <input type="number" placeholder="price" id="card-price">
          <input type="number" placeholder="rating" id="card-rating">
          <input type="submit" value="Submit">
 </form> */
  let cardid=document.getElementById("card-id")
  let cardTitle=document.getElementById("card-title")
  let cardCategory=document.getElementById("card-category")
  let cardPrice=document.getElementById("card-price")
  let cardRating=document.getElementById("card-rating")

function display(info,totalcount){
    btncontainer.innerHTML="";
    let buttonArray=[];
    for(let i=1;i<=Math.ceil(totalcount/16);i++){
        buttonArray.push(`<button data-id="${i}" class="page_btn">${i}</button>`)
    }
     btncontainer.innerHTML=buttonArray.join("")
   container.innerHTML="";
   let cards=info.map(ele=>getcards(
    ele.Rating,
    ele.category,
    ele.image,
    ele.price,
    ele.title,
    ele.id
   )).join("")
   container.innerHTML=cards
   let page_btns=document.getElementsByClassName("page_btn");
   for(let btn of page_btns){
    btn.addEventListener("click",()=>{
        fetchdata(btn.dataset.id)
        btn.style.backgroundColor="white"
        btn.style.color="black";
        btn.style.border="1px solid black"
        async function fetchdata(page){
            let res = await fetch(`https://mock-apai.onrender.com/toys?_page=${page}&_limit=16`);
            let totalProduct=res.headers.get("x-total-count");
            total.textContent=totalProduct
            let data=await res.json();
            display(data,totalProduct)
        }
    })
   }
   let editBtn=document.getElementsByClassName("card_edit_btn")
   console.log(editBtn)
   for(let btn of editBtn){
       btn.addEventListener("click",()=>{
        cardId=btn.dataset.id
        fetch(`https://mock-apai.onrender.com/toys/${cardId}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            cardid.value=data.id;
            cardTitle.value=data.title;
            cardCategory.value=data.category;
            cardPrice.value=data.price;
            cardRating.value=data.Rating;
            popup.style.display = "block";
        })
       })
   }
}
let title=document.getElementById("card-title")
popup.addEventListener("submit", (event) => {
    event.preventDefault();
    
    // Submit form data here using fetch or XMLHttpRequest
    // After submission, hide the popup
    popup.style.display = "none";
  });
function getcards(rating,category,image,price,title,id){
    let card=`
      <div class="card">
          <img src="${image}"/>
          <p>${title}</p>
          <p>${category}</p>
          <p>$${price}</p>
          <p>Rating : ${rating}</p>
          <div class="card-button">
             <button data-id="${id}" class="card_edit_btn">Edit</button>
             <button data-id="${id}" class="card_delete_btn">Delete</button>
          </div>
      </div>
    
    `
    return card
}



