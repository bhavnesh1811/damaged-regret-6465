document.querySelector("form").addEventListener("submit",()=>{
    event.preventDefault()
    let name=document.getElementById("fn_299").value
    let password=document.getElementById("pswd_299").value
    testing(name,password)
    
})
let flag=true
let LSData=JSON.parse(localStorage.getItem("Admin"))
const testing=(name,password)=>{
    LSData.forEach(ele => {
        if(name===ele.name && password===ele.password){
            alert("Login Successfull!")
            window.location.href="AddProduct.html"
            return flag=false
        }
    });
    if(flag){
        alert("Only Admin Can Login!")
    }
}