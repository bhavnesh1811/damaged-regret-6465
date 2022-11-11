
// let total = JSON.parse(localStorage.getItem("cart_total")) || 0;
// console.log(typeof(total))
// document.getElementById("items_count").innerText = total;

const totalUrl="https://better-buy-rh4i.onrender.com/cartData";
let total=0;

let calculateTotal=async()=>{
   let data=await fetch(totalUrl);
   data=await data.json();
   console.log('data:', data)
   for(let i=0;i<data.length;i++){
    total+=data[i].deal_price;
    // total=+total;
    
   }
}
calculateTotal();

let coupon_applied = JSON.parse(localStorage.getItem("coupon_applied"));
document.querySelector("#btn1").addEventListener("click",()=>{
    
    if(total >= 1500){
        if(coupon_applied == true){ 
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.7);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}  `);

        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})

document.querySelector("#btn2").addEventListener("click",()=>{
    
    
    if(total >= 1600){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.6);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1599.")
    }
})

document.querySelector("#btn3").addEventListener("click",()=>{
    
    
    if(total >= 1200){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total - 300;
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1199.")
    }
})

document.querySelector("#btn4").addEventListener("click",()=>{
    
    
    if(total >= 7000){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.5);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.6999.")
    }
})

document.querySelector("#btn5").addEventListener("click",()=>{
    
    
    if(total >= 900){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total - 100;
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.900.")
    }
})

document.querySelector("#btn6").addEventListener("click",()=>{
    
    
    if(total >= 1100){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = Math.round(total * 0.9);
            let coupon_applied = true;
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            localStorage.setItem("cart_total",JSON.stringify(total));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1099.")
    }
})


document.querySelector("#btn12").addEventListener("click",()=>{
    
    if(total >= 1500){
        if(coupon_applied == true){
            alert("Only one coupon can be applied per payment.")
            // continue;
        }
        else{
            total = total * 0.7;
            let coupon_applied = true;
            localStorage.setItem("cart_total",JSON.stringify(total));
            localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
            alert(`Hurray! Coupon Applied. Your new cart total is ${total}`);
        }
        open_page();
    }
    else{
        alert("This coupon is only applicable for amount more than Rs.1499.")
    }
})


let open_page = () =>{
    window.location = "payment.html";
    
}



//-----------------Navbar Username Display ------------------

// let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) || false;

// if(isLoggedIn == true){
//     let loginDb = JSON.parse(localStorage.getItem("loginData"));
//   console.log(loginDb);
  
 
  
//   document.querySelector("#username").innerText = "Hello, " + loginDb.name;
//   document.querySelector("#username1").addEventListener("click",()=>{
//     isLoggedIn = false;
//     let cart_items = JSON.parse(localStorage.getItem("cart_total"));
//         cart_items = 0;
//         localStorage.setItem("cart_total",JSON.stringify(cart_items));
//     let coupon_applied = JSON.parse(localStorage.getItem("coupon_applied"));
//     coupon_applied = false;
//     localStorage.setItem("coupon_applied",JSON.stringify(coupon_applied));
//     localStorage.setItem("isLoggedIn",JSON.stringify(isLoggedIn));
//     document.location.reload();
//   })
// }
// else{
//     document.querySelector("#username").addEventListener("click",()=>{
        
//         window.location = "signup.html";
//     })
// }