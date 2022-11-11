// var total = 0;
// var cartItems = JSON.parse(localStorage.getItem("MyCart"));
// console.log(cartItems);
// for (var i = 0; i < cartItems.length; i++) {
//   var mrp = cartItems[i].product_MRP;
//   var qty = cartItems[i].total_quantity;
//   total = total + Number(mrp) * Number(qty);
// }
// var detailsOfCart = document.createElement("div");
// var div1 = document.createElement("div");
// var h3 = document.createElement("h3");
// h3.textContent = "Groceries Basket";
// div1.append(h3);
// var div2 = document.createElement("div");
// var p = document.createElement("p");
// p.textContent = "Total" + "(" + cartItems.length + " Items" + ")";
// var br = document.createElement("br");
// var p2 = document.createElement("p");
// p2.textContent = "₹  " + total;
// p2.style.textAlign = "end";
// div2.append(p, p2);
// var hr = document.createElement("hr");
// detailsOfCart.append(div1, div2);
// document.getElementById("cartItems").append(detailsOfCart, hr);
// function displayCartItems(cartItems) {
//   cartItems.map(function (item) {
//     var nameDiv = document.createElement("div");
//     var imageDiv = document.createElement("div");
//     var image = document.createElement("img");
//     image.setAttribute("src", item.product_url);
//     imageDiv.append(image);
//     var matterBox = document.createElement("div");
//     matterBox.setAttribute("id", "matterBox");
//     var ptag = document.createElement("p");
//     ptag.textContent = item.product_name;
//     var ptag1 = document.createElement("p");
//     ptag1.textContent =
//       "₹ " + Number(item.total_quantity) * Number(item.product_MRP);
//     var span = document.createElement("span");
//     span.textContent = "Qty:" + item.total_quantity;
//     var h3 = document.createElement("h5");
//     // h3.textContent = "Delivery Between 5th Nov to 7th Nov";
//     matterBox.append(ptag, ptag1, span, h3);
//     nameDiv.append(imageDiv, matterBox);
//     var hr = document.createElement("hr");
//     document.getElementById("cartItems").append(nameDiv, hr);
//   });
// }
// displayCartItems(cartItems);
// localStorage.setItem("mrpTotal", JSON.stringify(total));
// document.querySelector("#orderContain h2").textContent =
//   "My Cart  " + "(" + cartItems.length + ")";

// var box1 = document.createElement("div");
// box1.setAttribute("id", "box1");
// var box2 = document.createElement("div");
// box2.setAttribute("id", "box2");
// document.getElementById("coupon").append(box1, box2);

// var sub1 = document.createElement("div");
// sub1.setAttribute("id", "sub1");
// sub1.textContent = "Apply Coupon";
// var sub2 = document.createElement("div");
// sub2.setAttribute("id", "sub2");
// sub2.textContent = "VIEW All";
// box1.append(sub1, sub2);

// var logo = document.createElement("div");
// logo.setAttribute("id", "logo");
// var logoimg = document.createElement("img");
// logoimg.setAttribute(
//   "src",
//   "https://w7.pngwing.com/pngs/510/533/png-transparent-discounts-and-allowances-computer-icons-coupon-tag-symbol-icon-sales-miscellaneous-angle-logo.png"
// );
// logo.append(logoimg);
// var tub2 = document.createElement("input");
// tub2.setAttribute("id", "tub2");
// tub2.setAttribute("type", "text");
// tub2.setAttribute("placeholder", "Enter Coupon Code");

// var tub3 = document.createElement("button");
// tub3.setAttribute("id", "tub3");
// tub3.textContent = "APPLY";
// box2.append(logo, tub2, tub3);
// tub3.addEventListener("click", apply);

// document.querySelector("#mrpTotal span").textContent = "₹  " + total;
// document.querySelector("#mrpTotal span").style.color = "black";
// document.querySelector("#total > h3:nth-Child(2)").textContent = "₹  " + total;

// function apply() {
//   var value = tub2.value;
//   if (value == "masai10") {
//     alert(
//       "yay!!! coupon code applied. Discount 10% is applied on total amount"
//     );
//     var masai_coupon = total - (total * 10) / 100;
//     document.querySelector("#total > h3:nth-Child(2)").textContent =
//       "₹  " + masai_coupon;
//     total = masai_coupon;
//   }
// }
// document
//   .querySelector("#paymentButton button")
//   .addEventListener("click", function () {
//     localStorage.setItem("Total Amount", JSON.stringify(total));
//     window.location.href = "summary.html";
//   });

 
    import navbar from "../Components/navbar.js";
    //console.log('navbar:', navbar);
    let navbar_div=document.getElementById("navbar");
    navbar_div.innerHTML=navbar();

const urlData="https://better-buy-rh4i.onrender.com/cartData";
const data=async() =>{
  let cartData=await fetch(urlData);
  cartData=await cartData.json();
  console.log(cartData);
  appendTop(cartData);
}

data()

const appendTop = async (data) => {
  let best_seller = document.querySelector('#orderContain');
  best_seller.innerHTML = null;

  // let data = await fetch(`${url}/topdeals1169`);
  // data = await data.json();
  data.forEach(({ url, title, ratings, deal_price, actual_price }) => {

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

    });


    div.append(prod_image, prod_title, prod_ratings, prod_deal_price, prod_actual_price, savings, btn)
    best_seller.append(div);
  })
}
let total=0;
let deal_total=0;
let cartcount=document.getElementById("counter");
let totalAmount=document.getElementById("total")
totalAmount.innerHTML=null;
//cartcount.innerHTML=null;
let totalMrp=document.getElementById("mrpTotal")
totalMrp.innerHTML=null;
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
  cartcount.innerHTML=data.length;
}
cartTotal();

let buttonsummary=document.getElementById("paymentButton");
buttonsummary.onclick=()=>{
window.location.replace("summary.html");
}