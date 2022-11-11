function navbar() {
    return `<div class="header">
    <div style="display: flex; margin-left: 70px">
       
        <div>
            <img src="blob:https://web.whatsapp.com/021e53dc-ed68-4654-b8f8-aaab1427424a" alt="" />
        </div>
    </div>
    <ul class="listMenu">
        <li>
            <input type="text" placeholder="Search essentials , groceries, and more ..." /><i
                style="margin-left: -32px; color: grey;" class="fas fa-align-justify"></i>
        </li>

        <li style="color: white">
            <a id="userName" href="./signup.html" style="font-size: 18px; color: white; text-decoration: none"><i
                    class="fa fa-user"></i>&nbsp;&nbsp;Sign In/Sign Up</a>
                    
        </li>
       
        <li style="color: white">
            <a id="userName" href="./userpage.html" style="font-size: 18px; color: white; text-decoration: none"><i
                    class="fa fa-user"></i>&nbsp;&nbsp;Account Details</a>
        </li>
        <li style="color: white">
        <a id="userName" href="./adminLogin.html" style="font-size: 18px; color: white; text-decoration: none"><i
                class="fa fa-user"></i>&nbsp;&nbsp;Admin Login</a>
    </li>
        <li>
            <a href="cartpage.html" style="color: white; text-decoration: none"><i class="fa fa-shopping-cart"
                    style="font-size: 19px; color: white"></i>&nbsp;&nbsp;Cart</a>
                    <div id="counter"></div>
        </li>
    </ul>
</div>
<div id="mainnav" class="mainnav secondHead">
    <ul>
        <li class="box">
            <a href="#popup1" class="buttonPop" style="text-decoration: none; color: #333">
                <i class="fas fa-map-marker-alt"></i>&nbsp;&nbsp;Deliver To
            </a>
        </li>
        
        <div id="popup1" class="overlay">
            <div class="popup">
                <h4>Where do you want to delivery</h4>
                <p>Get access to your address, Orders & Wishlists</p>
                <div><button>Sign In to see your Address</button></div>
                <hr />
                <h4>Or Enter Pincode</h4>
                <p>Select pincode to see your availablity</p>
                <a class="close" href="#">&times;</a>
            </div>
        </div>
       
        <li>
            <span>Premium Fruits &nbsp;
                <i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="fresh fruits.html">Fresh Fruits</a></li>
                <li><a href="#">Fresh Vegetables</a></li>
                <li><a href="#">Herbs & seasonings</a></li>
                <li><a href="#">Exotic Fruits & Vegetables</a></li>
                <li><a href="#">Fresh Flower</a></li>
            </ul>
        </li>
        <li>
            <span>Home and Kitchen&nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Dairy</a></li>
                <li><a href="#">Toast & Khari</a></li>
                <li><a href="#">Cakes & Muffins</a></li>
                <li><a href="#">Bread & Buns</a></li>
                <li><a href="#">Baked Cookies</a></li>
                <li><a href="#">Bakery Snacks</a></li>
                <li><a href="#">Batter & Chutney</a></li>
                <li><a href="#">Chees</a></li>
                <li><a href="#">Ghee</a></li>
                <li><a href="#">Paneer & Tofu</a></li>
            </ul>
        </li>
        <li>
            <span>Staples &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Atta, Flours & Sooji</a></li>
                <li><a href="#">Dals & Pulses</a></li>
                <li><a href="#">Rice & Rice Products</a></li>
                <li><a href="#">Edible Oils</a></li>
                <li><a href="#">Masalas & Spices</a></li>
                <li><a href="#">Salt, Sugar & Juggery</a></li>
                <li><a href="#">Grains</a></li>
                <li><a href="#">Dry Fruits & Nuts</a></li>
                <li><a href="#">Combo Offers</a></li>
            </ul>
        </li>
        <li>
            <span>Men &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Clothing Accessories</a></li>
                <li><a href="#">Western Wear </a></li>
                <li><a href="#">Inner Wear</a></li>
                <li><a href="#">Bags, Belts & Wallets</a></li>
                <li><a href="#">Ethnic Wear</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Fusion Wear</a></li>
                <li><a href="#">Night & Lounge Wear</a></li>
                <li><a href="#">Fashion Jewellery-</a></li>
            </ul>
        </li>
        <li>
            <span>Women &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Ethnic Wear</a></li>
                <li><a href="#">Western Wear</a></li>
                <li><a href="#">Clothing Accessories</a></li>
                <li><a href="#">Lingerie & Innerwear</a></li>
                <li><a href="#">Bags, Belts & Wallets</a></li>
                <li><a href="#">Fusion Wear</a></li>
                <li><a href="#">Night & Lounge Wear</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Maternity</a></li>
                <li><a href="#">Fashion Jewellery</a></li>
                <li><a href="#">Eyewear</a></li>
                <li><a href="#">Makeup</a></li>
                <li><a href="#">Personal Care</a></li>
                <li><a href="#">Hair Care</a></li>
            </ul>
        </li>
        <li>
            <span>Boys &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Western Wear</a></li>
                <li><a href="#">Ethnic Wear</a></li>
                <li><a href="#">Clothing Accessories</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Inner & Nightwear</a></li>
            </ul>
        </li>
        <li>
            <span>Girls &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Weatern Wear</a></li>
                <li><a href="#">Ethnic Wear</a></li>
                <li><a href="#">Clothing Accessories</a></li>
                <li><a href="#">Baggs, Belts & Wallet</a></li>
                <li><a href="#">Footwear</a></li>
                <li><a href="#">Night & Loungewear</a></li>
                <li><a href="#">Inner & Nightwear</a></li>
            </ul>
        </li>
        <li>
            <span>Snack & Food &nbsp;<i class="fa fa-chevron-down" style="color: grey"></i></span>
            <ul class="submenu">
                <li><a href="#">Buscuits & Cookies</a></li>
                <li><a href="#">Noodles, Pasta, Vermicelli</a></li>
                <li><a href="#">Breakfast Cereals</a></li>
                <li><a href="#">Snacks & Namkeen</a></li>
                <li><a href="#">Choclates & Candies</a></li>
                <li><a href="#">Frozen Veggies & Snacks</a></li>
                <li><a href="#">Spreads, Sauces, Ketchup</a></li>
                <li><a href="#">Indian Sweets</a></li>
                <li><a href="#">Pickles & CHutney</a></li>
                <li><a href="#">Extracts & Flavouring</a></li>
            </ul>
        </li>
    </ul>
</div>
<input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
<label for="openSidebarMenu" class="sidebarIconToggle">
    <div class="spinner diagonal part-1"></div>
    <div class="spinner horizontal"></div>
    <div class="spinner diagonal part-2"></div>
</label>
<div id="sidebarMenu" style="margin-top: -15p">
    <ul class="sidebarMenuInner">
        <li>
            <div>
                <p>Hello, Sign In</p>
            </div>
            <div>
                <button>Account</button>
                <button>Orders</button>
            </div>
        </li>
        <div id="container" style="background: gray; overflow-x: hidden">
            <div id="content1" style="background-color: white">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop By Category</a></li>
                <li><a href="#">My List</a></li>
                <li><a href="#">JioMart Wallet</a></li>
                <li><a href="#">JioMart cashback</a></li>
                <li><a href="#">All Offers</a></li>
            </div>
            <div id="content2" style="background-color: white">
                <li><a href="#">My Account</a></li>
                <li><a href="#">Need Help</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Guide</a></li>
            </div>
            <div id="content3" style="background-color: white; margin-top: -15px">
                <h3 style="font-weight: 600px">ContactUs</h3>
                <p>WhatsApp us : <span>70003 70003</span></p>
                <p>Call Us : <span>1800 890 1222</span></p>
                <p>8:00 AM to 8:00 PM, 365 days</p>
                <p>
                    Please note that you are accessing the BETA Version of
                    www.jiomart.com
                </p>
                <p id="smaltext">
                    Should you encounter any bugs, glitches, lack of functionality,
                    delayed deliveries, billing errors or other problems on the beta
                    website, please email us on cs@jiomart.com
                </p>
                <h3>DOWNLOAD APP</h3>
                <div class="divv" style="display: inline">
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" />
                </div>
                <div class="divv" style="display: inline">
                    <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" />
                </div>
            </div>
        </div>
    </ul>
</div>`;
  }
  export default navbar;