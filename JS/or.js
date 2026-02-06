
const cart=JSON.parse(localStorage.getItem("orderData"))||{};
let total=0;
const list=document.getElementById("list");

for(let item in cart){
let li=document.createElement("li");
li.textContent=`${item} x ${cart[item].qty} = ₹${cart[item].price*cart[item].qty}`;
list.appendChild(li);
total+=cart[item].price*cart[item].qty;
}
document.getElementById("total").textContent=total;
document.getElementById("oid").textContent=Math.floor(Math.random()*100000);

localStorage.removeItem("orderData");

function back(){
window.location.href="do.html";

} 


