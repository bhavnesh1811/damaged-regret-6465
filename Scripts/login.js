import navbar from "../Components/navbar.js";
console.log(navbar);
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

import footer from '../Components/footer.js';
    let footer_div=document.getElementById("footer");
    footer_div.innerHTML=footer();

let UserData = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(UserData);

let otp = "123456";

let verifyUser = document
  .getElementById("verify")
  .addEventListener("click", () => {
    let giveErr = document.getElementById("err");
    let otpAlert = document.getElementById("otpAlt");

    let mobile_no = document.getElementById("mbl").value;
    let userOTP = document.getElementById("OTP").value;

    let user_a = document.getElementById("user_div");
  let acc_details = document.getElementById("acc_div");
  let user_name = document.getElementById("user_name");

    if (mobile_no == "" && userOTP == "") {
      giveErr.style.visibility = "visible";
      giveErr.innerText = "All Fields are Mandatory";
      otpAlert.style.visibility = "visible";
      otpAlert.style.color = "red";
      otpAlert.innerText = "All Fields are Mandatory!";
    }

    UserData.forEach((el) => {
      if (mobile_no !== el.mbl && mobile_no !== "") {
        giveErr.style.visibility = "visible";
        giveErr.innerText = "Unauthorised User***";
      }
       else if (userOTP !== el.OTP && userOTP !== "") {
        otpAlert.style.visibility = "visible";
        otpAlert.style.color = "red";
        otpAlert.innerText = "Wrong OTP**";
      } else if (mobile_no == el.mbl && userOTP == el.OTP && userOTP == otp) {
        localStorage.setItem("user", JSON.stringify(el));
        alert("Login In Successfully!");
        localStorage.setItem("flag", JSON.stringify(true));
        window.location.href = "index.html";
        user_a.style.display = "none";
    acc_details.style.display = "block";
    user_name.innerText = `${firstName}`;
        window.location.href = "userpage.html";
      }

    });
    
  });

let resendOtp = document
  .getElementById("resend")
  .addEventListener("click", () => {
    alert(`Your New OTP is ${otp}`);
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
