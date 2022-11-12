import navbar from "../Components/navbar.js";
//console.log('navbar:', navbar);
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

let total=0;
let deal_total=0;
let total_count=JSON.parse(localStorage.getItem("total_count"))||0;
let cartcount=document.getElementById("counter");

let totalAmount=document.getElementById("total")
totalAmount.innerHTML=null;
let totalMrp=document.getElementById("mrpTotal")
totalMrp.innerHTML=null;

cartcount.innerHTML=total_count;


const urlData="https://better-buy-rh4i.onrender.com/cartData";
const dataCart=async() =>{
let cartData=await fetch(urlData);
cartData=await cartData.json();
console.log(cartData);
total_count=cartData.length;
cartcount.innerHTML=total_count;
appendTop(cartData);
}

dataCart();

const appendTop = async (data) => {
let best_seller = document.querySelector('#orderContain');
best_seller.innerHTML = null;

// let data = await fetch(`${url}/topdeals1169`);
// data = await data.json();
data.forEach(({ url, title, ratings, deal_price, actual_price,id }) => {

let div = document.createElement('div');
div.className = 'deals1169'

let prod_image = document.createElement('img');
prod_image.src = `${url}`;

let prod_title = document.createElement('h4');
prod_title.innerHTML = `${title}`;

let prod_ratings = document.createElement('p');
prod_ratings.innerHTML = `Ratings:-${ratings}`;

let prod_deal_price = document.createElement('p');
prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`

let prod_actual_price = document.createElement('p');
prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
prod_actual_price.style.textDecoration = "line-through"

let savings = document.createElement('p');
savings.innerHTML = `Savings:- ₹ ${actual_price - deal_price}`;

let btn = document.createElement('button');
btn.innerHTML = 'Add to cart';
btn.setAttribute("class","addProduct");
btn.style.marginRight="20px";
btn.addEventListener("click", async () => {
  let urlData = "https://better-buy-rh4i.onrender.com/cartData";
  let cartData = {
    url,
    title,
    ratings,
    deal_price,
    actual_price,
    id: Date.now() + Math.random(),
  }
  cartData = JSON.stringify(cartData);

  await fetch(urlData, {
    method: "POST",
    body: cartData,
    headers: {
      "Content-Type": "application/json"
    }
  });
  total_count++;
  localStorage.setItem("total_count",JSON.stringify(total_count));
  cartcount.innerHTML=total_count;
  total+=actual_price;
  deal_total+=deal_price;
  totalAmount.innerHTML=`Total Price :-${total}`;
  totalMrp.innerHTML=`Deal Price :-${deal_total}`;
  dataCart();
});

let deleteBtn = document.createElement('button');
deleteBtn.innerHTML = 'Remove Product';
deleteBtn.setAttribute("class","deleteProduct")
deleteBtn.addEventListener("click", () => {
  deleteProduct(id);
  total_count--;
  localStorage.setItem("total_count",JSON.stringify(total_count));
  cartcount.innerHTML=total_count;
  total-=actual_price;
  deal_total-=deal_price;
  totalAmount.innerHTML=`Total Price :-${total}`;
  totalMrp.innerHTML=`Deal Price :-${deal_total}`;
});


div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, savings, btn,deleteBtn)
best_seller.append(div);
})
}

let cartTotal=async()=>{
let data=await fetch(urlData);
data=await data.json();
console.log("data.length", data.length);

for(let i=0; i<data.length; i++){
total=total+data[i].actual_price;
deal_total=deal_total+data[i].deal_price;
//count++;
}
totalAmount.innerHTML=`Total Price :-${total}`;
totalMrp.innerHTML=`Deal Price :-${deal_total}`;
// cartcount.innerHTML=data.length;
localStorage.setItem("total_count",JSON.stringify(data.length))
}
cartTotal();

let buttonsummary=document.getElementById("paymentButton");
buttonsummary.onclick=()=>{
window.location.replace("summary.html");
}

const deleteProduct=async(id)=>{
try{

  await fetch(`${urlData}/${id}`, {

    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  
  dataCart();
  
  
}catch(err){
console.log('err:', err)

}
}
