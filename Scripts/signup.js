import navbar from "../Components/navbar.js";
console.log(navbar);
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

import footer from '../Components/footer.js';
    let footer_div=document.getElementById("footer");
    footer_div.innerHTML=footer();


let UserData_arr = JSON.parse(localStorage.getItem("userData")) || [];
// let otp = Math.floor(Math.random() * 100000) + 111111;
let otp = "123456";

let addMobileNo = document.getElementById("mblBtn").addEventListener("click", () => {

  let main_div = document.getElementById("sign_mbl");
  let signup_page = document.getElementById("signup");
  let give_alert = document.getElementById("err");
  let mobile_num = document.getElementById("mbl").value;
  let num_msg = document.getElementById("mbl_msg");
  num_msg.innerText = `we have sent 6 digit OTP on +91-${mobile_num}`;
  if (mobile_num === "") {
    give_alert.style.visibility = "visible";
  } else if (mobile_num.length > 10 || mobile_num.length < 10) {
    give_alert.style.visibility = "visible";
    give_alert.innerText = "Please enter valid number";
  } else {
    alert(`Your OTP is: ${otp}`);
    main_div.style.display = "none";
    signup_page.style.display = "block";
  }

});

// CF 

function userDetails(
  firstName,
  lastName,
  email,
  password,
  confirm_password,
  mOtp,
  mobile_num
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.pass = password;
  this.Cpass = confirm_password;
  this.OTP = mOtp;
  this.mbl = mobile_num;
}

let addUser = document.getElementById("verify").addEventListener("click", () => {

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirm_password = document.getElementById("Cpass").value;
  let mOtp = document.getElementById("OTP").value;
  let mobile_num = document.getElementById("mbl").value;
  let opt_alert = document.getElementById("otpAlrt");
  
  let user_a = document.getElementById("user_div");
  let acc_details = document.getElementById("acc_div");
  let user_name = document.getElementById("user_name");

   if(firstName == "" || lastName == "" || email == "" || password == "" || confirm_password == ""){
    alert("All Fields are Mandatory to Fill");
  }
  if(password.length<8 && password !=="" ){
    alert("Password length should be minimum of 8 characters")
  }
  if(confirm_password !== password){
    alert("Passwords do not Match");
  }
  
  if (mOtp == "") {
    opt_alert.style.display = "block";
    opt_alert.innerText = "Please Fill the OTP";
  }
  else if (otp !== mOtp && mOtp !== "") {
    opt_alert.style.display = "block";
    opt_alert.innerText = "OTP do not Match";
  } else if (otp === mOtp && confirm_password == password && firstName !== "" && lastName !== "" && email !== "" && password !== "" && confirm_password !== "") {
    alert("Verifiction Successfully!");
    user_a.style.display = "none";
    acc_details.style.display = "block";
    user_name.innerText = `${firstName}`;
    let data = new userDetails(
      firstName,
      lastName,
      email,
      password,
      confirm_password,
      mOtp,
      mobile_num
    );
    // console.log(data);
    
    UserData_arr.push(data);
    localStorage.setItem("userData", JSON.stringify(UserData_arr));
    localStorage.setItem("flag", JSON.stringify(true));
    window.location.href = "index.html";
      // window.location.href = "login.html";
     firstName = document.getElementById("firstName").value = null;
  lastName = document.getElementById("lastName").value = null;
  email = document.getElementById("email").value = null;
  pass = document.getElementById("pass").value = null;
  Cpass = document.getElementById("Cpass").value = null;
  mOtp = document.getElementById("OTP").value = null;
  mobile_num = document.getElementById("mbl").value = null;
}

});


let changeNo = document.getElementById("change_no").addEventListener("click", () => {
  let main_div = document.getElementById("sign_mbl");
  let signup_page = document.getElementById("signup");
  main_div.style.display = "block";
  signup_page.style.display = "none";
});

let resendOtp = document.getElementById("resend").addEventListener("click", () => {
  let give_alert = document.getElementById("err");
  let main_div = document.getElementById("sign_mbl");
  let signup_page = document.getElementById("signup");
  main_div.style.display = "block";
  signup_page.style.display = "none";
  give_alert.innerText = "Session Timeout Please Refill your Mobile Number";
  alert(`Your New OTP is ${otp}`)
});


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