let UserData_arr = JSON.parse(localStorage.getItem("userData")) || [];

let otp = Math.floor(Math.random() * 100000) + 111111;
let enter = () => {
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
    mobile_num = document.getElementById("mbl").value = null;
  }
};

function userDetails(
  firstName,
  lastName,
  email,
  password,
  confirm_password,
  mOtp
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.pass = password;
  this.Cpass = confirm_password;
  this.OTP = mOtp;
}

let verify = () => {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let confirm_password = document.getElementById("Cpass").value;
  let mOtp = document.getElementById("OTP").value;
  if (mOtp == "") {
    alert("Please fill the OTP");
  } else if (mOtp !== otp) {
    alert("otp didn't match");
  } else if (mOtp === otp) {
    alert("Verifiction Successfully!")
}


  let data = new userDetails(
    firstName,
    lastName,
    email,
    password,
    confirm_password,
    mOtp
  );
  //   console.log(data);

  UserData_arr.push(data);
  localStorage.setItem("userData", JSON.stringify(UserData_arr));
  //   window.location.href = "login.html";

  firstName = document.getElementById("firstName").value = null;
  lastName = document.getElementById("lastName").value = null;
  email = document.getElementById("email").value = null;
  pass = document.getElementById("pass").value = null;
  Cpass = document.getElementById("Cpass").value = null;
  mOtp = document.getElementById("OTP").value = null;
};

document.getElementById("change_no").addEventListener("click", () => {
  let main_div = document.getElementById("sign_mbl");
  let signup_page = document.getElementById("signup");
  main_div.style.display = "block";
  signup_page.style.display = "none";
});

document.getElementById("resend").addEventListener("click", () => {
//   let mobile_num = document.getElementById("mbl").value;
  let give_alert = document.getElementById("err");
  let main_div = document.getElementById("sign_mbl");
  let signup_page = document.getElementById("signup");
  main_div.style.display = "block";
  signup_page.style.display = "none";

  give_alert.innerText = "Session Timeout Please Refill your Mobile Number";
});
