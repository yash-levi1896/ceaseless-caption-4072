
    let createAccount = document.querySelector('#createAccount');
    // let logIn = document.querySelector('.nav>button:nth-child(2)');
    let logInForm = document.querySelector('#login')
    let signUpForm = document.querySelector('#signup')
    let adminbutton1 = document.querySelector("#adminbutton1")
   
    let adminbutton2 = document.querySelector("#adminbutton2")
    let adminForm = document.querySelector("#admin")
    // let signupbutton = document.querySelector("#signupbutton")
    let Email = document.querySelector("#email")
    let Password = document.querySelector("#password")
    //let signinbutton = document.querySelector("#signinbutton")
    createAccount.addEventListener("click",function(){
       
        logInForm.style.display = 'none';
        signUpForm.style.display = 'block';
        
    })
    // <label for="name2" >First Name</label>
    //         <input type="text"  placeholder="First Name" id ="name2" required>
    //         <label for="name3" >Last Name</label>
    //         <input type="text"  placeholder="Last Name" id ="name3" required>
    //         <label for="email2" >Email</label>
    //         <input type="email"  placeholder="Email" id ="email2" required>
    //         <label for="password2">Password*</label>
    //         <input type="password" placeholder="Password" id ="password2" class="myInput" required></input>

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
    // logIn.addEventListener("click",function(){
    //     logInForm.style.display = 'block';
    //     signUpForm.style.display = 'none';    
    // })
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
    //  signUpForm.addEventListener("submit",function(ele){
    //       ele.preventDefault();
    //       let element = {
    //         name2: signUpForm.name2.value,
    //         email2: signUpForm.email2.value,
    //         password2: signUpForm.password2.value,
    //         //name: signUpForm.name2.value,
    //         //name: signUpForm.name2.value,
            
    //       }
    //       loginarray.push(element);
           
    //        alert("User Registered Successfully!!");
    //        logInForm.style.display = 'block';
    //     signUpForm.style.display = 'none'; 
           
    //  })
    //  let email = logInForm.email.value;
    //  let password = logInForm.password.value; 
    //  logInForm.addEventListener("submit",function(el){
    //     el.preventDefault();
        // if(registered(loginarray)){
        //     alert("Login Successfully!!")
        //     location.replace("./index.html");

        // }else {
        //     alert("Please Register yourself!!")
        // }
        
  // })
  // function registered(data){
  //     for(let i=0; i<data.length; i++){
  //       if((logInForm.email.value == data[i].email2) && (logInForm.password.value ==  data[i].password2)){
  //           return true;
  //       }
        
  //     }
  //     return false
  // }
  // function myFunction() {
  //   var x = document.querySelector(".myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }
