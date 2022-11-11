// let urlData = "https://better-buy-rh4i.onrender.com/cartData";
let total=0;

let deal_total=0;
//let cartcount=document.getElementById("counter");
let totalAmount=document.getElementById("mrpTotals")
totalAmount.innerHTML=null;
//cartcount.innerHTML=null;
let totalMrp=document.getElementById("totals")
totalMrp.innerHTML=null;
let cartTotal=()=>{
  let data=localStorage.getItem("cart_total");
  console.log('data:', data)
  
  totalAmount.innerHTML=`Total Amount to be Paid :-${data}`;
  
}
cartTotal();
const paymentproceed=(e)=>{
    e.preventDefault();
    setTimeout(() => {
        alert("Your order is Placed Successfully, Thanks for Shopping!!") ;
        // let data=localStorage.setItem("cart_total",0);
        window.location.href="index.html";
    }, 2000);
  
   
}