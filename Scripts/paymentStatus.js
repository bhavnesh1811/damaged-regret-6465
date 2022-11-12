const urlData="https://better-buy-rh4i.onrender.com/cartData";
const dataCart=async() =>{
let cartData=await fetch(urlData);
cartData=await cartData.json();
console.log(cartData);
// total_count=cartData.length;
// cartcount.innerHTML=total_count;
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


div.append(prod_image, prod_title, prod_ratings, prod_deal_price, prod_actual_price, savings)
best_seller.append(div);
})
}
const appendUserData=()=>{
    let userdetail=document.getElementById("userDetails");
    userdetail.innerHTML=null;
    let data=JSON.parse(localStorage.getItem("userData"));
    data.forEach(({firstName,lastName,mbl})=>{
        let div=document.createElement("div");

        let span=document.createElement("span");
        span.innerHTML=`Order Details of ${firstName} ${lastName} with ${mbl} number.`
        span.style.fontSize="2rem";
        span.style.fontWeight="600";
        span.style.paddingBottom="50px";

        div.append(span);
        userdetail.append(div);
    });
};

let PaidStatus=JSON.parse(localStorage.getItem("paymentStatus"));
console.log('PaidStatus:', PaidStatus)
let amountPaid=JSON.parse(localStorage.getItem("cart_total"));
let paymentDone=document.getElementById("userStatus");
if(PaidStatus===true){
    appendUserData();
    paymentDone.innerHTML=`Total Amount Paid by user is ${amountPaid}`
}else{
    appendUserData();
    paymentDone.innerHTML=`${amountPaid} amount not paid yet`
    
    
}




