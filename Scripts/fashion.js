import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let UserData = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(UserData);
let dataArr=JSON.parse(localStorage.getItem("flag"))||false;
console.log('dataArr:', dataArr)
if(dataArr===true){
  let firstName=UserData[0].firstName;
  let user_a = document.getElementById("user_div");
  let acc_details = document.getElementById("acc_div");
  let user_name = document.getElementById("user_name");

  user_a.style.display = "none";
    acc_details.style.display = "block";
    user_name.innerText = `${firstName}`;
}


//   cart fun 

let cartcount = document.getElementById("counter");
const dataCount = async () => {
  let urlData = "https://better-buy-rh4i.onrender.com/cartData";
  let cartData = await fetch(urlData);

  cartData = await cartData.json();
  console.log(cartData);
  cartcount.innerHTML = cartData.length;
  //appendTop(cartData);

}
dataCount();

let url = "https://better-buy-rh4i.onrender.com/Fashion";
const appendTop = async () => {
  let best_seller = document.querySelector('#dataDiv');
  best_seller.innerHTML = null;
  

  let data = await fetch(`${url}`);
  data = await data.json();
  data.forEach(({ url, title, deal_price, actual_price, id }) => {

    let div = document.createElement('div');
    div.className = 'items'

    let prod_image = document.createElement('img');
    prod_image.src = `${url}`;

    let prod_title = document.createElement('h2');
    prod_title.innerHTML = `${title}`;

    let prod_deal_price = document.createElement('b');
    prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`

    let prod_actual_price = document.createElement('p');
    prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
    prod_actual_price.style.textDecoration = "line-through"

    let btn = document.createElement('button');
    btn.innerHTML = 'Add to cart';
    btn.addEventListener("click", async () => {
      let urlData = "https://better-buy-rh4i.onrender.com/cartData";
      let cartData = {
        url,
        title,
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
      dataCount();
    });


    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, btn)
    best_seller.append(div);
  })
}
appendTop();


const sortedData = async (data) => {
  let best_seller = document.querySelector('#dataDiv');
  best_seller.innerHTML = null;

  data.forEach(({ url, title, deal_price, actual_price, id }) => {

    let div = document.createElement('div');
    div.className = 'items'

    let prod_image = document.createElement('img');
    prod_image.src = `${url}`;

    let prod_title = document.createElement('h2');
    prod_title.innerHTML = `${title}`;

    let prod_deal_price = document.createElement('b');
    prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`

    let prod_actual_price = document.createElement('p');
    prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
    prod_actual_price.style.textDecoration = "line-through"

    let btn = document.createElement('button');
    btn.innerHTML = 'Add to cart';
    btn.addEventListener("click", async () => {
      let urlData = "https://better-buy-rh4i.onrender.com/cartData";
      let cartData = {
        url,
        title,
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
      dataCount();
    });


    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, btn)
    best_seller.append(div);
  })
}
let sortByPrice = document.getElementById("sortHL");
sortByPrice.onclick = async () => {
  

  let data = await fetch(`${url}?_sort=deal_price&_order=desc`);
  data = await data.json();
  console.log('data:', data)
  sortedData(data)
}

let sortByPriceLH = document.getElementById("sortLH");
sortByPriceLH.onclick = async () => {
  

  let data = await fetch(`${url}?_sort=deal_price&_order=asc`);
  data = await data.json();
  console.log('data:', data);
  sortedData(data);
}


// datadiv 2 append files 


const appendTops = async () => {
  let best_seller = document.querySelector('#dataDiv2');
  best_seller.innerHTML = null;
  

  let data = await fetch(`${url}`);
  data = await data.json();
  data.forEach(({ url, title, deal_price, actual_price, id }) => {

    let div = document.createElement('div');
    div.className = 'items'

    let prod_image = document.createElement('img');
    prod_image.src = `${url}`;

    let prod_title = document.createElement('h2');
    prod_title.innerHTML = `${title}`;
    let prod_deal_price = document.createElement('b');
    prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`

    let prod_actual_price = document.createElement('p');
    prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
    prod_actual_price.style.textDecoration = "line-through"
      
    let btn = document.createElement('button');
    btn.innerHTML = 'Add to cart';
    btn.addEventListener("click", async () => {
      let urlData = "https://better-buy-rh4i.onrender.com/cartData";
      let cartData = {
        url,
        title,
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
      dataCount();
    });


    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, btn)
    best_seller.append(div);
  })
}
appendTops();









