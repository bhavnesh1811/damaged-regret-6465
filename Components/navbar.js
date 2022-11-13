function navbar() {
    return `<div id="top">
    <img
      id="burger_logo"
      src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/burger_menu.svg"
      alt="Burger menu"
    />
    <a id="brand_logo" href="index.html">
          <p >Better</p>
          <div id="logo">
            <img
            id=" brand_cart_logo"
            src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/cart.svg"
            alt="Cart Logo"
          />
          <p >Buy</p>
          </div>
        </a>
    <div id="search_div">
      <input
        type="text"
        id="query"
        placeholder="Search essentials, groceries, and more ..."
      />
      <img
        id="search_burger"
        src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/list-view.svg"
        alt="Search Burger Logo"
      />
    </div>
    <div id="user_div">
      <img
        id="user_logo"
        src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/profile.svg"
        alt="User Logo"
      />
      <p>
        <a id="Sign_a" href="login.html">Sign in</a> /
        <a href="signup.html">Sign up</a>
      </p>
    </div>
    <div id="acc_div">
      <img
        id="acc_img"
        src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/my-account.svg"
        alt=""
      />
      <a id="user_name" href="userpage.html">Lokesh</a>
    </div>
    <a id="admin_a" href="adminLogin0.2.html">Admin Login</a>
    <a id="cart_a" href="cartpage.html"
      ><div id="cart">
        <img
          id="cart_logo"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/cart.svg"
          alt="Cart Logo"
        />
        <span id="counter">0</span>
        <p>Cart</p>
      </div></a
    >
  </div>
  <div id="bottom_nav">
    <div id="bottom_nav_innerDiv">
      <div id="deliver">
        <img
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/location-on.svg"
          alt="Location img"
        />
        <div>
          <p>Deliver to</p>
          <p>400020</p>
        </div>
      </div>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Groceries <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="two_clm">
          <a class="cat_a" href="">Fruits & Vegetables</a>
          <a class="cat_a" href="">Premium Fruits</a>
          <a class="cat_a" href="">Dairy & Bakery</a>
          <a class="cat_a" href="">Apparel</a>
          <a class="cat_a" href="">Staples</a>
          <a class="cat_a" href="">Home & Kitchen</a>
          <a class="cat_a" href=""> Snacks & Branded Foods</a>
          <a class="cat_a" href="">Mom & Baby Care</a>
          <a class="cat_a" href=""> Beverages</a>
          <a class="cat_a" href="">Books</a>
          <a class="cat_a" href="">Personal Care</a>
          <a class="cat_a" href="">Pets</a>
          <a class="cat_a" href="">Home Care</a>
          <a class="cat_a" href="">Beauty</a>
        </div>
      </div>
    </li>
      <li class="dropdown">
      <a class="dropbtn" href=""
        >Premium Fruits
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="two_clm">
          <a class="cat_a" href="">Apples & Pears</a>
          <a class="cat_a" href="">Dates</a>
          <a class="cat_a" href="">Avocado, Peach Plum</a>
          <a class="cat_a" href="">Gift, Assorted & XL Packs</a>  
          <a class="cat_a" href=""> Banana, Melon, & Coconut</a>
          <a class="cat_a" href="">Pomegranate, Papaya & Pineapple</a>
          <a class="cat_a" href=""> Cherries, Berries & Exotic Fruits</a>
          <a class="cat_a" href="">Seasonal & minor Fruits</a>
          <a class="cat_a" href="">Citrus,Mango & Grapes</a>
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="">
        Home & Kitchen
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="two_clm">
          <a class="cat_a" href="">Bathroom & Laundary Accessories</a>
          <a class="cat_a" href="">Home Decor</a>
          <a class="cat_a" href="">Disposables</a>
          <a class="cat_a" href=""> Kitchenware</a>
          <a class="cat_a" href=""> Furnishing</a>
          <a class="cat_a" href=""> Prayer & Spiritual Needs</a>
          <a class="cat_a" href="">Furniture</a>
          <a class="cat_a" href="">Tableware</a>
          <a class="cat_a" href="">Garden & Outdoor</a>
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="fashion.html">
        Fashion
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="one_clm">
          <a class="cat_a" href=""> Men</a>
          <a class="cat_a" href=""> Women</a>
          <a class="cat_a" href=""> Boys</a>
          <a class="cat_a" href=""> Girls</a>
          <a class="cat_a" href=""> Infants</a>
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="electronics.html">
        Electronics
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="one_clm">
          <a class="cat_a" href=""> Mobile & Tablets</a>
          <a class="cat_a" href=""> TV & Speaker</a>
          <a class="cat_a" href=""> Home Appliances</a>
          <a class="cat_a" href=""> Computers</a>
          <a class="cat_a" href=""> Cameras</a>
          <a class="cat_a" href="">Kitchen Appliances</a>
          <a class="cat_a" href=""> Personal Care & Grooming</a>
          <a class="cat_a" href=""> Smart Devices</a>
          <a class="cat_a" href=""> Gaming</a>
          <a class="cat_a" href=""> Accessories</a>
          <a class="cat_a" href=""> Phones</a>
          <a class="cat_a" href=""> Office Products</a>
          <a class="cat_a" href=""> Health Care Devices</a>
          <a class="cat_a" href=""> Electronic Musical Instruments</a>
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="">
        Beauty
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="one_clm">
          <a class="cat_a" href="">Make-Up</a>
          <a class="cat_a" href="">Hair</a>
          <a class="cat_a" href="">Skin Care</a>
          <a class="cat_a" href=""> Fragrances</a>
          <a class="cat_a" href=""> Personal Care</a>
          <a class="cat_a" href=""> Mom & Baby</a>
          <a class="cat_a" href=""> Men's Grooming </a>
          <a class="cat_a" href="">Tools & Appliances</a>
          <a class="cat_a" href="">Covid Essentials</a>
          <a class="cat_a" href="">Wellness</a>
          <a class="cat_a" href="">Fitness</a>
          <a class="cat_a" href="">Ayush</a>
          <a class="cat_a" href="">Treatments</a>
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="">
        Home Improvement
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="one_clm">
          <a class="cat_a" href=""> Auto Care</a>
          <a class="cat_a" href=""> Building Supplies & Measuring Tools</a>
          <a class="cat_a" href=""> Carpentry</a>
          <a class="cat_a" href=""> Electrical</a>
          <a class="cat_a" href=""> Hardware & Plumbing</a>
          <a class="cat_a" href=""> Home Cleaning & Organisation </a>
          <a class="cat_a" href=""> Industrial & Scientific Supplies</a>
          <a class="cat_a" href=""> Home Safety & Automation</a>
          <a class="cat_a" href=""> Kitchen & Bath Fixture</a>
          <a class="cat_a" href=""> Packaging Supplies</a>
          <a class="cat_a" href=""> Paint, wall Treatments & Supplies</a>
          <a class="cat_a" href=""> Power & Hand Tools</a>
          
        </div>
      </div>
    </li>
    <li class="dropdown">
      <a class="dropbtn" href="">
        Sports, Toys & Luggage
        <img
          id="courser_down"
          src="https://www.jiomart.com/assets/version1666876029/smartweb/images/icons/chevron-down.svg"
          alt="courser_down"
      /></a>
      <div class="dropdown-content">
        <div class="one_clm">
          <a class="cat_a" href="">Toys & Games</a>
          <a class="cat_a" href="">Bags & Travel Luggage</a>
          <a class="cat_a" href="">Sporting Gods & Fitness Equipments</a>
        </div>
      </div>
    </li>
    
    </div>
  </div>`;
  };
  export default navbar;

 