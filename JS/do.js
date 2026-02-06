
const pizzas=[
    {name:"Margherita",price:200,img:"margharita.jfif",desc:"Classic cheese pizza with fresh tomato sauce."},
    {name:"Farmhouse",price:300,img:"farmhouse.webp",desc:"Loaded with fresh veggies and herbs."},
    {name:"Peppy Paneer",price:250,img:"peppypanner.jpeg",desc:"Spicy paneer with tangy toppings."},
    {name:"Pepperoni",price:280,img:"peper.jpg",desc:"Pepperoni slices with extra cheese."}
];

const drinks=[
    {name:"Coke",price:80,img:"cola.webp",desc:"Chilled Coca Cola."},
    {name:"Pepsi",price:75,img:"pepsi.png",desc:"Refreshing Pepsi soda."},
    {name:"Sprite",price:70,img:"sprite.jfif",desc:"Lemon-lime soda, crisp and cold."},
    {name:"Cold Coffee",price:100,img:"cc.jpg",desc:"Iced coffee with creamy texture."}
];

const desserts=[
    {name:"Choco Lava Cake",price:120,img:"cl.jpg",desc:"Rich molten chocolate dessert."},
    {name:"Brownie",price:150,img:"brownie.jpg",desc:"Chocolate brownie with nuts."},
    {name:"Butterscotch Mousse",price:200,img:"bm.jfif",desc:"Creamy butterscotch mousse."},
    {name:"Tiramisu",price:300,img:"tiramisu.jfif",desc:"Classic Italian dessert with coffee flavor."}
];

const combos=[
    {name:"Pizza & Pepsi",price:420,img:"pcombo.jpg",desc:"Pizza served with chilled Pepsi."},
    {name:"Pizza & Chocolava",price:350,img:"pandg.jpeg",desc:"Pizza with a Choco Lava dessert."},
    {name:"Family combo",price:600,img:"family.jpg",desc:"Large combo for the whole family."}
];

let cart={};

function loadMenu(items, containerId){
    const menu=document.getElementById(containerId);
    items.forEach(p=>{
        const card=document.createElement("div");
        card.className="card";
        // Wrap image in a container for overlay
        card.innerHTML=`
            <div class="img-container" data-desc="${p.desc}">
                <img src="${p.img}">
            </div>
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addItem('${p.name}',${p.price})">Add</button>
        `;
        menu.appendChild(card);
    });
}

loadMenu(pizzas,"pizzaMenu");
loadMenu(drinks,"drinkMenu");
loadMenu(desserts,"dessertMenu");
loadMenu(combos,"comboMenu");

function addItem(name,price){
    if(!cart[name]) cart[name]={price,qty:0};
    cart[name].qty++;
    renderCart();
}

function renderCart(){
    let total=0,count=0;
    const cartDiv=document.getElementById("cartItems");
    cartDiv.innerHTML="";
    for(let item in cart){
        let p=cart[item];
        total+=p.price*p.qty;
        count+=p.qty;
        cartDiv.innerHTML+=`
        <div class="cart-item">
            ${item} x ${p.qty} = ₹${p.price*p.qty}
            <div>
                <button class="qty-btn" onclick="changeQty('${item}',-1)">-</button>
                <button class="qty-btn" onclick="changeQty('${item}',1)">+</button>
                <button onclick="removeItem('${item}')">❌</button>
            </div>
        </div>`;
    }
    document.getElementById("total").textContent=total;
    document.getElementById("badge").textContent=count;
}

function changeQty(item,delta){
    cart[item].qty+=delta;
    if(cart[item].qty<=0) delete cart[item];
    renderCart();
}

function removeItem(item){
    delete cart[item];
    renderCart();
}

function checkout(){
    if(Object.keys(cart).length===0){
        alert("Cart empty!");
        return;
    }

    localStorage.setItem("orderData", JSON.stringify(cart));

    let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

    allOrders.push({
        id: "ORD" + Math.floor(Math.random()*10000),
        items: cart,
        total: document.getElementById("total").textContent,
        time: new Date().toLocaleString()
    });

    localStorage.setItem("allOrders", JSON.stringify(allOrders));

    window.location.href="or.html";
}
