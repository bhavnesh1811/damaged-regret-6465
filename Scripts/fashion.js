import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let Fashion = [
    { "image": "https://www.jiomart.com/images/product/330x410/rvnmgjmef2/hala-white-numbered-black-m2-touch-a-digital-watch-for-boys-girls-product-images-rvnmgjmef2-0-202209290917.jpg","title":" hala WHITE-NUMBERED-BLACK-M2-TOUCH A Digital Watch - For Boys & Girls","deal_price":99,"actual_price":499},
    { "image": "https://www.jiomart.com/images/product/330x410/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg","title":"BRUTON Trendy Sports Shoes For Men (Blue) ","deal_price":349,"actual_price":2499},
    { "image": "https://www.jiomart.com/images/product/330x410/441120188_jetblack/fastdry-active-training-jacket-model-441120188_jetblack-0-202204080109.jpg","title":"Fastdry Active Training Jacket ","deal_price":549,"actual_price":999},
    { "image": "https://www.jiomart.com/images/product/330x410/rvzyptbisl/hellcat-boys-multicolor-cotton-blend-printed-pack-of-2-t-shirt-product-images-rvzyptbisl-0-202207120359.jpg","title":"HELLCAT Boys Multicolor Cotton Blend Printed Pack of 2 T-shirt","deal_price":489,"actual_price":1999},
    { "image": "https://www.jiomart.com/images/product/330x410/rvvv4eraef/axter-black-sneaker-8-product-images-rvvv4eraef-0-202202271326.jpg","title":"Axter Casual Men Black Shoes ","deal_price":249,"actual_price":699},
    { "image": "https://www.jiomart.com/images/product/330x410/rv3o3zt1di/boys-cutpanel-jogger-pant-pack-of-3-product-images-rv3o3zt1di-0-202209071954.jpg","title":"GWA Boys CutPanel Jogger Pant (Pack of 3) ","deal_price":495,"actual_price":999},
    { "image": "https://www.jiomart.com/images/product/330x410/440971924_teal/panelled-track-pants-with-elasticated-drawstring-waist-model-440971924_teal-0-202104071508.jpg","title":"Fastdry Active Essential Track Pants ","deal_price":300,"actual_price":599},
    { "image": "https://www.jiomart.com/images/product/330x410/rvzynqqavf/axter-casual-shoes-product-images-rvzynqqavf-0-202205310845.jpg","title":"Amazing Collection of Combo Pack of 2 Multicolor Combo-(2)-9273-5013 Trendy & Stylish Casual Sneakers Shoes ","deal_price":399,"actual_price":988},
    { "image": "https://www.jiomart.com/images/product/330x410/rvhsj0wemk/chahat-fab-women-multicolor-printed-cotton-blend-kurtas-product-images-rvhsj0wemk-0-202207241247.jpg","title":"Chahat Fab Women Multicolor Printed Cotton Blend Kurtas ","deal_price":289,"actual_price":999},
    { "image": "https://www.jiomart.com/images/product/330x410/rvu1eaymwc/shopyholik-men-shorts-latest-new-combo-pack-of-3-product-images-rvu1eaymwc-0-202208261222.jpg","title":"Shopyholik Men Shorts latest New combo pack of 3 ","deal_price":399,"actual_price":1999},
    { "image": "https://www.jiomart.com/images/product/330x410/rvdxlbwxxq/t2f-boys-hooded-cotton-sweatshirt-product-images-rvdxlbwxxq-0-202209121531.jpg","title":"T2F Boys Hooded Cotton Sweatshirt ","deal_price":249,"actual_price":1200},
    { "image": "https://www.jiomart.com/images/product/330x410/440633743_assorted/pack-of-3-handkerchiefs-model-440633743_assorted-0-202104081625.jpg","title":"Pack of 3 Handkerchiefs ","deal_price":116,"actual_price":129},
    { "image": "https://www.jiomart.com/images/product/330x410/rvzufmcur3/fargo-grey-leatherette-handbag-pack-of-5-product-images-rvzufmcur3-0-202206012253.jpg","title":"Fargo Grey Leatherette Handbag (Pack of 5) ","deal_price":499,"actual_price":2999},
    { "image": "https://www.jiomart.com/images/product/330x410/rv7nliby4r/t2f-boys-hooded-cotton-sweatshirt-product-images-rv7nliby4r-0-202209121623.jpg","title":"T2F Boys Hooded Cotton Sweatshirt ","deal_price":249,"actual_price":1200},
    { "image": "https://www.jiomart.com/images/product/330x410/rvqruqvbpo/aadi-black-casuals-men-product-images-rvqruqvbpo-0-202205132104.jpg","title":"Aadi Black Casuals Men ","deal_price":279,"actual_price":999},
    { "image": "https://www.jiomart.com/images/product/330x410/441120188_olivegreen/fastdry-active-training-jacket-model-441120188_olivegreen-0-202204080513.jpg","title":"Fastdry Active Training Jacket ","deal_price":549,"actual_price":1999}
  ]

  const appendTop = async ( data ) => {
    let best_seller = document.querySelector('#dataDiv');
    best_seller.innerHTML = null;
  
    // let data = await fetch(`${url}/topdeals1169`);
    // data = await data.json();
    data.forEach(({ image, title, deal_price, actual_price,id }) => {
  
      let div = document.createElement('div');
      div.className = 'items'
  
      let prod_image = document.createElement('img');
      prod_image.src = `${image}`;
  
      let prod_title = document.createElement('h2');
      prod_title.innerHTML = `${title}`;
  
    //   let prod_ratings = document.createElement('p');
    //   prod_ratings.innerHTML = `Ratings:-${ratings}`;
  
      let prod_deal_price = document.createElement('b');
      prod_deal_price.innerHTML = `Deal Price:- ₹ ${deal_price}`
  
      let prod_actual_price = document.createElement('p');
      prod_actual_price.innerHTML = `M.R.P:- ₹ ${actual_price}`;
      prod_actual_price.style.textDecoration = "line-through"
  
    //   let savings = document.createElement('p');
    //   savings.innerHTML = `Savings:- ₹ ${actual_price - deal_price}`;
    //   savings.style.textDecoration = "none"
  
      let btn = document.createElement('button');
      btn.innerHTML = 'Add to cart';
      btn.addEventListener("click", async () => {
        let urlData = "https://better-buy-rh4i.onrender.com/cartData";
        let cartData = {
          image,
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
        // dataCount();
      });
  
  
      div.append(prod_image, prod_title, prod_deal_price, prod_actual_price, btn)
      best_seller.append(div);
    })
  }
  appendTop(Fashion);

//   cart fun 

let cartcount=document.getElementById("counter");
const dataCount=async() =>{
  let urlData = "https://better-buy-rh4i.onrender.com/cartData";
  let cartData=await fetch(urlData);
  
  cartData=await cartData.json();
  console.log(cartData);
  cartcount.innerHTML=cartData.length;
  //appendTop(cartData);
  
}
dataCount();




