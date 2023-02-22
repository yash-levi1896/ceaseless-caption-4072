




fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
.then((res) => res.json())
.then((data) => {
    console.log(data.data);

})

function displayData (data) {
    data.forEach(el => {
        
    });
}