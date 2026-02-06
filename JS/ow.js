
// function loadOrders(){
//     const ordersBody=document.getElementById("ordersBody");
//     let orders=JSON.parse(localStorage.getItem("allOrders"))||[];

//     if(orders.length===0){
//         ordersBody.innerHTML="<tr><td colspan='4'>No orders yet</td></tr>";
//         return;
//     }

//     orders.forEach(order=>{
//         let items="";
//         for(let i in order.items){
//             let p=order.items[i];
//             if(p.qty>0){
//                 items+=i+" x "+p.qty+"<br>";
//             }
//         }

//         ordersBody.innerHTML+=`
//         <tr>
//             <td>${order.id}</td>
//             <td>${items}</td>
//             <td>₹${order.total}</td>
//             <td>${order.time}</td>
//         </tr>`;
//     });
// }

// loadOrders();



function loadOrders() {
    const ordersBody = document.getElementById("ordersBody");
    ordersBody.innerHTML = "";

    let orders = JSON.parse(localStorage.getItem("allOrders")) || [];

    if (orders.length === 0) {
        ordersBody.innerHTML =
            "<tr><td colspan='5'>No orders yet</td></tr>";
        return;
    }

    orders.forEach((order, index) => {
        let items = "";
        for (let i in order.items) {
            let p = order.items[i];
            if (p.qty > 0) {
                items += `${i} x ${p.qty}<br>`;
            }
        }

        ordersBody.innerHTML += `
        <tr>
            <td>${order.id}</td>
            <td>${items}</td>
            <td>₹${order.total}</td>
            <td>${order.time}</td>
            <td>
                <button class="complete-btn" onclick="markCompleted(${index})">
                    ✔ Completed
                </button>
            </td>
        </tr>`;
    });
}

function markCompleted(index) {
    let orders = JSON.parse(localStorage.getItem("allOrders")) || [];
    orders.splice(index, 1); // remove completed order
    localStorage.setItem("allOrders", JSON.stringify(orders));
    loadOrders();
}

loadOrders();

