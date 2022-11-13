let api=`https://better-buy-rh4i.onrender.com`
document.querySelector("form").addEventListener("submit",(event)=>{
event.preventDefault();

    let title=document.getElementById("name_299").value
    let deal_price=+document.getElementById("deal_price_299").value
    let actual_price=+document.getElementById("actual_price_299").value
    let url=document.getElementById("url").value
    let query=document.getElementById("select_299").value
    let id=Date.now()+Math.random()
    // console.log(name,Deal_pri,act_price,url)
    let obj={
        title,
        deal_price,
        actual_price,
        url,
        id
    }
    update(obj,query)
   
})
const update=async(obj,query)=>{
    let res=await fetch(`${api}${query}`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    })
    console.log(query)

}

const delete_product_299=async()=>{
    let id=document.getElementById("delete_id_299").value
    let query=document.getElementById("delete_select_299").value
    await fetch(`https://better-buy-rh4i.onrender.com${query}/${id}`,{
        
        method:"DELETE",

        headers:{
            "Content-Type":"application/json",

        }
    })

}
let update_product_299 = async () => {
    let id=document.getElementById("update_id_299").value
    let query=document.getElementById("select_cat_299").value
    let data = window.prompt("Enter new price")
    let update_price = { deal_price: +(data) }

    let res = await fetch(`https://better-buy-rh4i.onrender.com${query}/${id}`, {
        method: "PATCH",
        body: JSON.stringify(update_price),
        headers: {
            "Content-Type": "application/json",
        }
    })
}
