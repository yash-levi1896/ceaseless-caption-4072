let container=document.querySelector(".container")
let btncontainer=document.querySelector(".buttonwarpper");
let total=document.getElementById("total-product")
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
}

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
