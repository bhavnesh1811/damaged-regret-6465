import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let Electronics =  [
    { "url": "https://www.jiomart.com/images/product/150x150/493178791/realme-narzo-50a-128-gb-4-gb-ram-oxygen-blue-mobile-phone-digital-o493178791-p594779615-0-202210221327.jpeg","title":" Realme Narzo 50A 128 GB, 4 GB RAM, Oxygen Blue, Mobile Phone","deal_price":10499,"actual_price":14999},
    { "url": "https://www.jiomart.com/images/product/150x150/492579512/boat-airdopes-148-true-wireless-airdopes-active-black-digital-o492579512-p591222869-0-202204192235.jpeg","title":"boAt Airdopes 148 True Wireless Airdopes, Active Black ","deal_price":1299,"actual_price":4490},
    { "url": "https://www.jiomart.com/images/product/150x150/rvf7ypalxs/noymi-et-147-bluetooth-neckband-wireless-earphones-product-images-orvf7ypalxs-p591296975-0-202205132214.jpg","title":"Noymi ET-147 Bluetooth Neckband wireless Earphones ","deal_price":299,"actual_price":2599},
    { "url": "https://www.jiomart.com/images/product/150x150/rv5vqc4khb/monkish-oneplus-7-pro-blue-polycarbonate-magnetic-shock-absorbent-mirror-flip-case-cover-product-images-orv5vqc4khb-p593763322-0-202209142232.jpg","title":"MONKISH OnePlus 7 Pro Blue Polycarbonate Magnetic, Shock-Absorbent Mirror Flip Case Cover|Mobile Cover|Mobile case|Flip cover","deal_price":310,"actual_price":1299},
    { "url": "https://www.jiomart.com/images/product/150x150/rv75kwcf1j/ptron-basspods-p11-wireless-bluetooth-headphones-with-24hrs-playback-10mm-driver-movie-mode-hd-mic-touch-control-earbuds-black-product-images-orv75kwcf1j-p593565959-0-202208302003.jpg","title":"pTron Basspods P11 Wireless Bluetooth Headphones with 24Hrs Playback, 10mm Driver, Movie Mode, HD Mic & Touch Control Earbuds (Black)","deal_price":699,"actual_price":2999},
    { "url": "https://www.jiomart.com/images/product/150x150/491901533/apple-iphone-12-128-gb-black-digital-o491901533-p590441373-0-202207250045.jpeg","title":"Apple iPhone 12 128 GB, Black ","deal_price":64900,"actual_price":999},
    { "url": "https://www.jiomart.com/images/product/150x150/rvoslkyfhj/4-universal-socket-multi-plug-with-3-switch-and-led-indicator-product-images-orvoslkyfhj-p593848494-0-202209191358.jpg","title":"4 Universal Socket Multi plug with 3 Switch and LED Indicator","deal_price":199,"actual_price":499},
    { "url": "https://www.jiomart.com/images/product/150x150/rvwpl4bik9/damdam-smartwatch-screen-guard-fire-boltt-ring-bluetooth-calling-smartwatch-pack-of-5-product-images-orvwpl4bik9-p592182556-0-202206232054.jpg","title":"DAMDAM Flexible TPU Screen Guard Compatible for Fire Boltt Ring Bluetooth Calling Smartwatch (Pack of 5) l Screen protector for Smartwatch","deal_price":229,"actual_price":999},
    { "url": "https://www.jiomart.com/images/product/150x150/492391909/lifelong-infinia-550-watts-mixer-grinder-black-digital-o492391909-p590819497-0-202110101023.jpeg","title":"Lifelong Infinia 500 Watts Mixer Grinder, Grey","deal_price":1399,"actual_price":2899},
    { "url": "https://www.jiomart.com/images/product/150x150/492796965/ptron-basspods-p181-bluetooth-5-1-wireless-headphones-32hrs-total-playtime-immersive-stereo-sound-stereo-calls-snug-fit-tws-earbuds-touch-controls-voice-assistance-type-c-fast-charging-ipx4-black-digital-o492796965-p591278358-0-202205120856.jpeg","title":"pTron Basspods P181 Bluetooth 5.1 Wireless Headphones, 32Hrs Total Playtime, Immersive Stereo Sound, Stereo Calls, Snug-fit TWS Earbuds, Touch Controls, Voice Assistance, Type-C Fast Charging & IPX4 (Black)","deal_price":699,"actual_price":2999},
    { "url": "https://www.jiomart.com/images/product/150x150/492796670/reconnect-be01802-wireless-earphone-with-ipx4-water-resistant-black-digital-o492796670-p593968378-0-202209230340.jpeg","title":"Reconnect Dank Bluetooth Earphone, with IPx4, water resistance, 16Hrs Battery , Multi point connection (Black) with 1 year warranty ","deal_price":399,"actual_price":1499},
    { "url": "https://www.jiomart.com/images/product/150x150/492334573/zebronics-zeb-dazzle-wireless-mouse-with-nano-receiver-matte-finish-black-digital-o492334573-p591367067-0-202205162206.jpeg","title":"Zebronics Zeb-Dazzle Wireless Mouse with Nano Receiver, Matte Finish (Black)","deal_price":249,"actual_price":329},
    { "url": "https://www.jiomart.com/images/product/150x150/492796748/hammer-sting-3-bluetooth-wireless-earphone-with-sweat-proof-and-deep-bass-black-digital-o492796748-p591220622-0-202204191433.jpeg","title":"Hammer Sting 3 Bluetooth Wireless Neckband Earphone with Sweat-proof and Deep Bass, Black Red with 1 year warranty ","deal_price":399,"actual_price":3495},
    { "url": "https://www.jiomart.com/images/product/150x150/491959199/nirlep-3-pc-breakfast-combo-non-stick-cookware-set-1-pc-multi-snackmaker-1-pc-mini-fry-pan-and-1-pc-sandwich-pan-digital-o491959199-p591194494-0-202203140951.jpeg","title":"Nirlep 3 Pc Breakfast Combo Non Stick Cookware Set (1 Pc Multi snackmaker, 1 Pc Mini Fry Pan and 1 Pc Sandwich Pan) ","deal_price":999,"actual_price":1350},
    { "url": "https://www.jiomart.com/images/product/150x150/rvgmo6vxwp/txor-storm-m5-smart-watch-fitness-band-35-mm-black-color-touch-screen-for-android-and-ios-black-strap-product-images-orvgmo6vxwp-p591301931-0-202205140303.jpg","title":"STORM M5, Smart Watch Fitness Band 35 mm Black Color Touch Screen for ANDROID and IOS, Black Strap","deal_price":599,"actual_price":1499},
    { "url": "https://www.jiomart.com/images/product/150x150/493178810/redmi-note-11-se-64-gb-6-gb-ram-bifrost-blue-mobile-phone-digital-o493178810-p594779644-0-202210221329.jpeg","title":"Redmi Note 11 SE 64 GB, 6 GB RAM, Bifrost Blue Mobile Phone ","deal_price":549,"actual_price":16999}

  ];

  const appendTop = async ( data ) => {
    let best_seller = document.querySelector('#dataDiv');
    best_seller.innerHTML = null;
  
    // let data = await fetch(`${url}/topdeals1169`);
    // data = await data.json();
    data.forEach(({ url, title, deal_price, actual_price,id }) => {
  
      let div = document.createElement('div');
      div.className = 'items'
  
      let prod_image = document.createElement('img');
      prod_image.src = `${url}`;
  
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
        // dataCount();
      });
  
  
      div.append(prod_image, prod_title,  prod_actual_price, prod_deal_price, btn)
      best_seller.append(div);
    })
  }
  appendTop(Electronics);

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





let showMore = document.getElementById("show_more").addEventListener("click", () => {

  const appendTop = async ( data ) => {
    let best_seller = document.querySelector('#dataDiv2');
    best_seller.innerHTML = null;
  
    // let data = await fetch(`${url}/topdeals1169`);
    // data = await data.json();
    data.forEach(({ url, title, deal_price, actual_price,id }) => {
  
      let div = document.createElement('div');
      div.className = 'items'
  
      let prod_image = document.createElement('img');
      prod_image.src = `${url}`;
  
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
        // dataCount();
      });
  
  
      div.append(prod_image, prod_title,  prod_actual_price, prod_deal_price, btn)
      best_seller.append(div);
    })
  }
  appendTop(Electronics);

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


});
showMore();




