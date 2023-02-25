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
  let CardImage=document.getElementById("card-image")
  let pageNo=1;
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
        pageNo=btn.dataset.id
        fetchdata(btn.dataset.id)
        btn.style.backgroundColor="white"
        btn.style.color="black";
        btn.style.border="0"
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
   
   for(let btn of editBtn){
       btn.addEventListener("click",()=>{
        cardId=btn.dataset.id
        fetch(`https://mock-apai.onrender.com/toys/${cardId}`)
        .then(res=>res.json())
        .then(data=>{
            
            cardid.value=data.id;
            cardTitle.value=data.title;
            cardCategory.value=data.category;
            cardPrice.value=data.price;
            cardRating.value=data.Rating;
            CardImage.value=data.image;
            popup.style.display = "block";
        })
       })
   }
 let logout=document.querySelector(".logout");
 logout.addEventListener("click",()=>{
    window.location.href="../index.html"
 })
   
   popup.addEventListener("submit", (event) => {
       event.preventDefault();
       let id=+cardid.value;
       let obj={
           title:cardTitle.value,
           category:cardCategory.value,
           price:+cardPrice.value,
           Rating:+cardRating.value,
           image:CardImage.value
       }
       console.log(obj)
       fetch(`https://mock-apai.onrender.com/toys/${id}`,{
           method:"PUT",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(obj)
       })
       .then(res=>res.json())
       .then(data=>{
           
           fetchdata(pageNo)
        })
        async function fetchdata(pageNo){
            let res = await fetch(`https://mock-apai.onrender.com/toys?_page=${pageNo}&_limit=16`);
            let totalProduct=res.headers.get("x-total-count");
            total.textContent=totalProduct
            let data=await res.json();
            display(data,totalProduct)
            
        }
        
       // After submission, hide the popup
       popup.style.display = "none";
      
     });
     
     let dltbtn=document.getElementsByClassName("card_delete_btn");
     for(let btn of dltbtn){
        btn.addEventListener("click",()=>{
            cardId=btn.dataset.id;
            fetch(`https://mock-apai.onrender.com/toys/${cardId}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                
                fetchdata(pageNo)
            })
            async function fetchdata(pageNo){
                let res = await fetch(`https://mock-apai.onrender.com/toys?_page=${pageNo}&_limit=16`);
                let totalProduct=res.headers.get("x-total-count");
                total.textContent=totalProduct
                let data=await res.json();
                display(data,totalProduct)   
            }

        })
     }

}

const propopup=document.querySelector(".pro-popup")
const addProduct=document.getElementById("add-product")
let pro_title=document.getElementById("pro-card-title");
let pro_image=document.getElementById("pro-card-image")
let pro_category=document.getElementById("pro-card-category");
let pro_price=document.getElementById("pro-card-price")
let pro_rating=document.getElementById("pro-card-rating")
addProduct.addEventListener("click",()=>{
   propopup.style.display="block";
   pro_image.value="https://dggo.dollargeneral.com/images/31/69/31698101_0.jpg"

})
/* <div class="pro-popup">
        <form>
          <label for="pro-card-title">Title</label>
          <input type="text" placeholder="title" id="pro-card-title">
          <label for="pro-card-image">Image</label>
          <input type="text" placeholder="image" id="pro-card-image">
          <label for="pro-card-category">category</label>
          <input type="text" placeholder="category" id="pro-card-category">
          <label for="pro-card-price">Price</label>
          <input type="text" placeholder="price" id="pro-card-price">
          <label for="pro-card-rating">Rating</label>
          <input type="text" placeholder="rating" id="pro-card-rating">
          <input type="submit" value="Edit">
        </form>
     </div> */


propopup.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        title:pro_title.value,
        image:pro_image.value,
        category:pro_category.value,
        price:pro_price.value,
        Rating:pro_rating.value
    }
    fetch(`https://mock-apai.onrender.com/toys`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json())
    .then(data=>{

        fetchAndRender();
    })
    propopup.style.display="none"
})





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



