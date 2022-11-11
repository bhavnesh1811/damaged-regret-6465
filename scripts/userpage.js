import navbar from "../script/navbar.js";
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();

import footer from '../script/footer.js';
    let footer_div=document.getElementById("footer");
    footer_div.innerHTML=footer();

let UserDetails = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(UserDetails);

let renderDOm = () => {
  let cont = document.getElementById("userInfo");
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
  console.log("123");
  window.location.href = "signup.html";
});

let logout = document.getElementById("logout").addEventListener("click", () => {
  window.location.href = "index.html"
  alert("Logout Successfully");
})
