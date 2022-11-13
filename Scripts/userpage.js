import navbar from "../Components/navbar.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

import footer from '../Components/footer.js';
    let footer_div=document.getElementById("footer");
    footer_div.innerHTML=footer();

let UserDetails = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(UserDetails);

let UserData = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(UserData);

let firstName = UserData[0].firstName
console.log(firstName);

let user_a = document.getElementById("user_div");
  let acc_details = document.getElementById("acc_div");
  let user_name = document.getElementById("user_name");

user_a.style.display = "none";
    acc_details.style.display = "block";
    user_name.innerText = `${firstName}`;

let cont = document.getElementById("userInfo");
let renderDOm = () => {
  cont.innerHTML = null;

  UserDetails.forEach((el) => {
    let p1 = document.createElement("p");
    p1.innerText = el.firstName + " " + el.lastName;

    let p2 = document.createElement("p");
    p2.innerText = el.email;

    let p3 = document.createElement("p");
    p3.innerText = el.mbl;

    cont.append(p1, p2, p3);

    
  });
};
renderDOm();

// Account Info Code
UserDetails.forEach((ele) => {
  let accName = document.getElementById("n");
  accName.innerText = ele.firstName + " " + ele.lastName;

  let accMblno = document.getElementById("m");
  accMblno.innerText = `+91- ${ele.mbl}`;

  let accEmail = document.getElementById("e");
  accEmail.innerText = ele.email;

});

let editDetails = document.getElementById("edit").addEventListener("click", () => {
  window.location.href = "signup.html";
});

let logout = document.getElementById("logout").addEventListener("click", () => {
console.log("123")
  // UserData = [];
  // localStorage.setItem("userData", UserData);
  // UserDetails = [];
  // localStorage.setItem("userData", UserDetails);
  
  window.location.href = "index.html";
  alert("Logout Successfully")
})



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