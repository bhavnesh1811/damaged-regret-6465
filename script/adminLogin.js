document.querySelector("form").addEventListener("submit",()=>{
    event.preventDefault()
    let name=document.getElementById("fn_299").value
    let mail=document.getElementById("mi_299").value
    let phone=document.getElementById("phone_299").value
    let password=document.getElementById("pswd_299").value
    if(name && mail && phone && password){
        let obj={
            name:name,
            mail:mail,
            phone:phone,
            password:password
        }
        append(obj)
    }
    else{
        alert("Please Fill complete Details")
    }
    

})
function append(obj){
    let LSData=JSON.parse(localStorage.getItem("Admin")) || []
    LSData.push(obj)
    // console.log(obj)
    localStorage.setItem("Admin",JSON.stringify(LSData))
    alert("Account is Created")
}