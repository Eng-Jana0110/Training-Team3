/*Jana */
fetch("../HTML/Navbar/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    const grid = document.querySelector('[data-menu="all"]');
    grid.addEventListener("click", () => {
      const panel = document.querySelector(".side-panel");
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
    renderCartState();
   
  });


// Open CLose Cart
function open_cart() {
  const cart = document.querySelector(".cart-card");
  if (cart) {
    cart.classList.add("active");
  }
}

function close_cart() {
  const cart = document.querySelector(".cart-card");
  if (cart) {
    cart.classList.remove("active");
  }
}


function renderCartState() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];



  const cartItems = document.querySelector(".items-in-cart");
  if (cartItems) {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="text-center text-muted my-3">Your cart is empty</p>`;
    } else {
      cart.forEach(function (item) {
        cartItems.innerHTML += `
          <div class="item-cart d-flex align-items-center justify-content-between gap-2">
              <img src="${item.image}" alt="${item.name}">
              <div class="content d-flex flex-column align-items-start">
                  <a href="#">${item.name}</a>
                  <p class="price-cart fw-bold mb-0">1 x $${item.price}</p>
              </div>
              <button class="btn btn-danger btn-sm" onclick="removefromcart('${item.id}')">
                  <i class="bi bi-trash3"></i>
              </button>
          </div>
        `;
      });
    }
  }

 const cartcount = document.querySelector("#cart-count-shop");
 if(cartcount){
  cartcount.textContent=cart.length;
 }
  const total = document.getElementById("total-price-shop");
  if (total) {
    let tl = 0;
    cart.forEach(function (item) {
      tl += Number(item.price);
    });
    total.innerHTML = `$${tl.toFixed(2)}`;
  }
}
function removefromcart(productid) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter(function (item) {
    return String(item.id) !== String(productid);
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartState();
}

function AddFriendToCart(id,name,price,image){
  let cart = JSON.parse(localStorage.getItem("cart"))||[];
  const frienproduct={
    id: String(id),
    name:name,
    price:price,
    image:image
  };
  cart.push(frienproduct);
  localStorage.setItem("cart",JSON.stringify(cart));

  renderCartState();
 
}

/*Open and CLose WishList */
function open_wish(){
  const wishlist = document.querySelector(".wishlist-card");
  if (wishlist) {
    wishlist.classList.add("active");
  }
}
function close_wish() {
  const wishlist = document.querySelector(".wishlist-card");
  if (wishlist) {
    wishlist.classList.remove("active");
  }
}

function renderWishState() {
  let wish = JSON.parse(localStorage.getItem("wish")) || [];



  const wishItems = document.querySelector(".wishlist-items");
  if (wishItems) {
    wishItems.innerHTML = "";
    if (wish.length === 0) {
      wishItems.innerHTML = `<p class="text-center text-muted my-3">Your WishList is empty</p>`;
    } else {
      wish.forEach(function (item) {
        wishItems.innerHTML += `
          <div class="wish-cart d-flex align-items-center justify-content-between gap-2">
              <img src="${item.image}" alt="${item.name}">
              <div class="content d-flex flex-column align-items-start">
                  <a href="#">${item.name}</a>
                  <p class="price-cart fw-bold mb-0">1 x $${item.price}</p>
              </div>
              <button class="btn btn-danger btn-sm" onclick="removefromwish('${item.id}')">
                  <i class="bi bi-trash3"></i>
              </button>
          </div>
        `;
      });
    }
  }
  const wishcount = document.querySelector("#wish-count-shop");
 if(wishcount){
  wishcount.textContent=wish.length;
 }
}
function removefromwish(productid) {
  let wish = JSON.parse(localStorage.getItem("wish"))||[];
    wish=wish.filter(function(item){
        return String(item.id) !== String(productid);
    });
  localStorage.setItem("wish",JSON.stringify(wish));
  renderWishState();
}
function AddFriendWish(id,name,price,image){

  let wish = JSON.parse(localStorage.getItem("wish"))||[];
  const exist = wish.some(function(item){
    return String(item.id)===String(id);
  });
  if(exist){
    alert("This product is already in your Wishlist  ")
    return;
  }
  const frienproduct={
   id: String(id),
    name:name,
    price:price,
    image:image
  };
  wish.push(frienproduct);
  localStorage.setItem("wish",JSON.stringify(wish));

  renderWishState();
 
}