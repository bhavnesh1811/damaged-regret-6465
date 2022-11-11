// import {Navbar} from "../components/navbar.js"
// document.getElementById("navbar").innerHTML = Navbar();

// import {Footer} from "../components/footer.js"
// document.getElementById("footer").innerHTML = Footer();

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
        // window.location.href = "index.html";
        window.location.href = "userpage.html";
      }

    });
    
  });

let resendOtp = document
  .getElementById("resend")
  .addEventListener("click", () => {
    alert(`Your New OTP is ${otp}`);
  });
