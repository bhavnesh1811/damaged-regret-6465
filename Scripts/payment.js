let urlData = "https://better-buy-rh4i.onrender.com/cartData";
let total=0;

let deal_total=0;
//let cartcount=document.getElementById("counter");
let totalAmount=document.getElementById("mrpTotals")
totalAmount.innerHTML=null;
//cartcount.innerHTML=null;
let totalMrp=document.getElementById("totals")
totalMrp.innerHTML=null;
let cartTotal=async()=>{
  let data=await fetch(urlData);
  data=await data.json();
  //console.log("data.length", data.length);

  for(let i=0; i<data.length; i++){
    total=total+data[i].actual_price;
    deal_total=deal_total+data[i].deal_price;
    //count++;
  }
  totalAmount.innerHTML=`Total Price :-${total}`;
  totalMrp.innerHTML=`Deal Price :-${deal_total}`;
  //cartcount.innerHTML=data.length;
  localStorage.setItem("cart_total", JSON.stringify(deal_total))
}
cartTotal();
const paymentproceed=(e)=>{
    e.preventDefault();
    setTimeout(() => {
        alert("Your order is Placed Successfully, Thanks for Shopping!!") ;
        window.location.href="index.html";
    }, 2000);
  
   
}