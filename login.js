    let createAccount = document.querySelector('#createAccount');
    let logInForm = document.querySelector('#login')
    let signUpForm = document.querySelector('#signup')
    let adminbutton1 = document.querySelector("#adminbutton1")
    let signinbutton1 = document.querySelector("#signinbutton1");
    let adminbutton2 = document.querySelector("#adminbutton2")
    let adminForm = document.querySelector("#admin")
    let Email = document.querySelector("#email")
    let Password = document.querySelector("#password")
    createAccount.addEventListener("click",function(){
        logInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    })
    let firstname=document.getElementById("name2");
    let lastname=document.getElementById("name3");
    let regEmail=document.getElementById("email2");
    let regPassword=document.getElementById("password2");
    signUpForm.addEventListener("submit",(el)=>{
       el.preventDefault();
        let obj={
          firstname:firstname.value,
          lastname:lastname.value,
          email:regEmail.value,
          password:regPassword.value,
        }
        console.log(obj)
        fetch(`https://mock-apai.onrender.com/register`,{
          method:"POST",
          body:JSON.stringify(obj),
          headers:{
            "Content-Type":"application/json"
          }
          })
      logInForm.style.display = 'block';
      signUpForm.style.display = 'none';
  })
  logInForm.addEventListener("submit",function(e){
      e.preventDefault();
      fetch(`https://mock-apai.onrender.com/register`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        let email = Email.value;
        let password = Password.value;
        let flag = false;
        for(let i=0; i<data.length; i++){
          if(email==data[i].email && password == data[i].password){
               flag = true;
          }
        }
        console.log(data)
          if(flag === true){
            alert("Sign In Successful!!")
            window.location.href = "./index.html"
          }else{
            alert("Create Account")
            logInForm.style.display = 'none';
            signUpForm.style.display = 'block';
          }
      })

  })
  //console.log(data)
    adminbutton1.addEventListener("click",function(){
      logInForm.style.display = 'none';
      adminForm.style.display = 'block'; 
    })
    adminbutton2.addEventListener("click",function(){
      signUpForm.style.display = 'none';
      adminForm.style.display = 'block'; 
    })
    let adminName=document.getElementById("name4");
    let adminPassword=document.getElementById("password3")
    adminForm.addEventListener("submit",e=>{
      e.preventDefault();
      if( adminName.value=="admin" && adminPassword.value=="admin" ){
        alert("admin login successfully!!")
        window.location.href="./admin/admin.html"
      }else{
        alert("Name or Password is Incorrect")
      }
    })
    signinbutton1.addEventListener("click",function(){
      adminForm.style.display = 'none'; 
      logInForm.style.display = 'block';
    })
