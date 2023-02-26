let container=document.getElementById("container");
let button=document.getElementById("button-wrapper");
let filt=document.getElementById("filter");
const url=`https://mock-apai.onrender.com/toys`;
let id;
let btns=document.getElementById("sortr");
let btnp=document.getElementById("sortp");
let search=document.querySelector(".search-input");
let searchbtn=document.querySelector(".search-btn");
let cartl=document.getElementById("cart-cout");
let toysData=[];
let cardData=[];

fetch(`https://mock-apai.onrender.com/cart`)
.then((res)=>{
    return res.json();
})
.then((cdata)=>{
    cartl.innerHTML=cdata.length;
    //console.log(cardData)
});
// functionalities
search.addEventListener("keydown",(e)=>{
    if (e.key == "Enter" && search.value != "") {
        //location.href = 'pages/results/results.html';
        //searchQuery = searchBar.value;
        //console.log(searchQuery);
        console.log("hi");
        fetchandrendercard(`?q=${search.value}`);
    }
    
})

filt.addEventListener("change",()=>{
    if(filt.value==""){
    fetchandrendercard(`?_page=${1}&_limit=12`)
    
    }
    else{
       fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${1}`)
    }
});   
btns.addEventListener("change",()=>{
    if(btns.value=="asc"){
        
        toysData.sort(function(a,b){return a.Rating-b.Rating});
        display(toysData);
    }
    else if(btns.value=="desc"){
        toysData.sort(function(a,b){return b.Rating-a.Rating});
    display(toysData);
    }
})    
btnp.addEventListener("click",()=>{
    if(btnp.value=="asc"){
        toysData.sort(function(a,b){return a.price-b.price});
        display(toysData)
    }
    else if(btnp.value=="desc"){
        toysData.sort(function(a,b){return b.price-a.price});
        display(toysData)
    }
   
})    
// display the cards
fetchandrendercard(`?_page=${1}&_limit=12`)
function fetchandrendercard(queryParamstring=null){
    fetch(`${url}${queryParamstring ? queryParamstring:""}`,{
       method:"GET",
    
    })
    .then((res)=> {
        let totalCount=res.headers.get("X-Total-Count")
        //console.log("total",totalCount);
        showpagination(totalCount,12)
        
        return res.json();
    })
    .then((data)=>{
        //console.log(data)
        toysData=data;
       // showpagination(data.totalPages)
        display(toysData);
        
    })
}


function display(data){
    container.innerHTML="";
    data.forEach((element) => {
        let card=document.createElement("div");
        let div2=document.createElement("div");
        let im=document.createElement("img");
        im.src=element.image;

        let title=document.createElement("h4");
        title.innerText=element.title;
        let price=document.createElement("p");
        price.innerText=`Price: $ ${element.price}`;
        let rating=document.createElement("p");
        rating.innerText=`Rating: ${element.Rating}`;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        btn.addEventListener("click",()=>{
             console.log(element);
            // console.log(cardData)
             if(checkDuplicate(element)){
                 alert("Product is already in the cart");
             }
             else{
                element.quantity=1;
                fetch(`https://mock-apai.onrender.com/cart`,{
                    method:"POST",
                    body:JSON.stringify(element),
                    headers:{'content-type':'application/json'}
                });
                
                alert("Product added to the cart");
                //cardData.length++
                fetch(`https://mock-apai.onrender.com/cart`)
                .then((x)=>{
                    return x.json();
                })
                .then((data)=>{
                    cartl.innerText=data.length;
                })
                console.log(cartl.innerHTML)
             }
        })
        
        div2.append(title,price,rating,btn)
        card.append(im,div2);
        container.append(card)
    });
}

function checkDuplicate(x){
    //console.log(cardData[0].id)
    if(cardData.length===0){
        return false;
    }
    for(let i=0;i<cardData.length;i++){
        if(cardData[i].id==x.id){
            return true;
        }
    }
    return false;
}

function showpagination(totalitems,x){
    const totalpages=Math.ceil(totalitems/x);
    //console.log(totalpages)
    function renderbutton(){
        let arr=[];
        for(let i=0;i<totalpages;i++){
             arr.push(getbuttons(i+1,i+1));
             
        }
       // console.log(arr)
        return arr.join("")
    }
    button.innerHTML=`
       ${ renderbutton()}`

    let buttonpage=document.querySelectorAll(".button-data");
    
    for(let x of buttonpage){
        x.addEventListener("click",(e)=>{
            let dataid=e.target.dataset.id;
            id=dataid;
            if(filt.value==""){
            fetchandrendercard(`?_page=${id}&_limit=12`)
            }
            else if(filt.value=="art-craft"){
                fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${id}`)
            }
            else if(filt.value=="Puzzle games-books"){
                fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${id}`)
            }
            else if(filt.value=="action-figure"){
                fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${id}`)
            }
            else if(filt.value=="Dolls"){
                fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${id}`)
            }
            else if(filt.value=="Vehicle-Train"){
                fetchandrendercard(`?category=${filt.value}&_limit=12&_page=${id}`)
            }
            
 })

}
}

function getbuttons(id,text){
    return ` <button data-id=${id} class="button-data">${text}</button>`
}