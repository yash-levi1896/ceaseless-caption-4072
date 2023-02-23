let container=document.getElementById("container");
const baseurl=`https://mock-apai.onrender.com`;

fetch(`${baseurl}/toys`)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    display(data)
});


function display(data){
    container.innerHTML="";
    data.forEach((element) => {
        let card=document.createElement("div");
        let div2=document.createElement("div");
        let im=document.createElement("img");
        im.src=element.image;
        im.style.height="200px"
        im.style.width="200px"
        card.style.border="1px solid red"

        let title=document.createElement("h2");
        title.innerText=element.title;
        let price=document.createElement("p");
        price.innerText=`Price: $ ${element.price}`;
        let rating=document.createElement("p");
        rating.innerText=`Rating: ${element.Rating}`;
        let btn=document.createElement("button");
        btn.innerText="Add to cart";
        div2.append(title,price,rating,btn)
        card.append(im,div2);
        container.append(card)
    });
}












function getbuttons(id,text){
    return ` <button data-id=${id} class="button-data">${text}</button>`
}