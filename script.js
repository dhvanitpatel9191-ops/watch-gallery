const regForm = document.getElementById("registerform");
if (regForm) {
  regForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("telephone").value.trim();
    if(name ==="" || email ==="" ||pass ===""||address===""||phone===""){
        document.getElementById("regmsg").innerText = "please enter all the feilds";
        return;
    }
    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailpattern)){
        document.getElementById("regmsg").innerText = "⚠️ Invalid email format.";
        document.getElementById("regmsg").style.color = "red";
    return;
    }
    if(phone.length !== 10 || isNaN(phone)){
        document.getElementById("regmsg").innerText = "⚠️ Invalid phone number.";
        document.getElementById("regmsg").style.color = "red";
        return;
    }
    if(pass.length<6){
        document.getElementById("regmsg").innerText = "⚠️ password should be atleast 6 char";
        document.getElementById("regmsg").style.color = "red";
        return;
    }
    localStorage.setItem("username",name);
    localStorage.setItem("emailadd",email);
    document.getElementById("regmsg").innerText = "✅ Registration Succesfull; You can now proceed to purchase"
    document.getElementById("regmsg").style.color = "green";
    document.getElementById("registerform").reset();   
  });
}

const orderForm = document.getElementById("orderform");
if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const user = localStorage.getItem("username");
    if (!user) {
        document.getElementById("ordermsg").innerText = "⚠️ Please register first before placing an order.";
        document.getElementById("ordermsg").style.color = "red";
        return;
    }
    
    let product = document.getElementById("product").value;
    let quantity = document.getElementById("quantity").value;
    let address = document.getElementById("delivery").value.trim();

    if(product == ""||address == ""){
        document.getElementById("ordermsg").innerText = "Input all the fields";
        document.getElementById("ordermsg").style.color = "red";
        return;
    }
    document.getElementById("ordermsg").innerText = `Thank You ${user}! Your order for ${quantity} X ${product} has been placed`;
    document.getElementById("ordermsg").style.color = "green";
    document.getElementById("orderform").reset();
    localStorage.clear(); 
  });
}
