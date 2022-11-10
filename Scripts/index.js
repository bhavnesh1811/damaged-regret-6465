const url = "https://better-buy-rh4i.onrender.com";

let id;
const slider = async () => {

  let slider_images1169 = await fetch(`${url}/slider_images1169`);
  slider_images1169 = await slider_images1169.json();
  // console.log('slider_images1169:', slider_images1169)
  let slides = document.getElementById("slider1");
  slides.innerHTML = null;
  let i = 0;
  let image = document.createElement("img");
  image.setAttribute("class", "sliderone");
  image.src = slider_images1169[0];
  slides.append(image);
  i++;

  id = setInterval(() => {
    if (i === 13) {
      i = 0;
    }
    image.src = slider_images1169[i];
    slides.append(image);
    // console.log('i:', i)
    i++;
  }, 3000)
}
slider();

const slide = async () => {
  let slider_images1169_2 = await fetch(`${url}/slider_images1169_2`);
  slider_images1169_2 = await slider_images1169_2.json();
  // console.log('slider_images1169:', slider_images1169_2)
  let slides = document.getElementById("slider1169_2");
  slides.innerHTML = null;
  let i = 0;
  let image = document.createElement("img");
  image.setAttribute("class", "slidertwo");
  image.src = slider_images1169_2[0];
  slides.append(image);
  i++;

  setInterval(() => {
    if (i === 5) {
      i = 0;
    }
    image.src = slider_images1169_2[i];
    slides.append(image);
    // console.log('i:', i)
    i++;
  }, 3000)
}
slide();

const carts = JSON.parse(localStorage.getItem("cart")) || [];
let totalS = JSON.parse(localStorage.getItem("cart")) || [];
const appendTop = async () => {
  let best_seller = document.querySelector('#top_deals1169');
  best_seller.innerHTML = null;

  let data = await fetch(`${url}/topdeals1169`);
  data = await data.json();
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
appendTop();

const mobiles1169 = async () => {
  let best_mobile = document.querySelector('#mobile_1169');
  best_mobile.innerHTML = null;

  let data = await fetch(`${url}/smartphones1169`);
  data = await data.json();
  data.forEach(({ url, title, ratings, deal_price, actual_price }) => {

    let div = document.createElement('div');
    div.className = 'mobiles1169'

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
    })
    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, savings, btn)
    best_mobile.append(div);
  });
}
mobiles1169();


const topBest1169 = async () => {
  let best_mobile = document.querySelector('#bestSelling1169');
  best_mobile.innerHTML = null;

  let data = await fetch(`${url}/topBestSelling`);
  data = await data.json();
  data.forEach(({ url, title, deal_price, actual_price }) => {

    let div = document.createElement('div');
    div.setAttribute("class","bestSeller1169");

    let prod_image = document.createElement('img');
    prod_image.src = `${url}`;

    let prod_title = document.createElement('h4');
    prod_title.innerHTML = `${title}`;

    let prod_deal_price = document.createElement('p');
    prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`

    let prod_actual_price = document.createElement('p');
    prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
    prod_actual_price.style.textDecoration = "line-through"

    let savings = document.createElement('p');
    savings.innerHTML = `Savings:- ₹ ${actual_price - deal_price}`;

    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, savings)
    best_mobile.append(div);
  });
}
topBest1169();

const foodGrains1169 = async() => {
  let food_Grain = document.querySelector('#foodGrain1169');
  food_Grain.innerHTML = null;

  let data = await fetch(`${url}/foodGrain1169`);
  data = await data.json();
  data.forEach(({ url, title, deal_price, actual_price }) => {

    let div = document.createElement('div');
    div.setAttribute("class","food_Grain1169");

    let prod_image = document.createElement('img');
    prod_image.src = `${url}`;

    let prod_title = document.createElement('h4');
    prod_title.innerHTML = `${title}`;

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
    })

    div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, savings,btn)
    food_Grain.append(div);
  });
}
foodGrains1169();






