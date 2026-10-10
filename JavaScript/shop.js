// Open CLose Cart
/*Jana */
function open_cart() {
  const cart = document.querySelector(".cart-card");
  cart.classList.add("active");
}
function close_cart() {
  const cart = document.querySelector(".cart-card");
  cart.classList.remove("active");
}
const products = [
  {
    id: 1,
    brand: "Dell",
    name: "Dell Optilex 9020 Small Form Bussiness Desktop",
    price: 2856.3,
    oldprice: 3225.3,
    image: "../assests/Products/Dell.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 2,
    brand: "HP",
    name: "HP 24 All-in-One PC, Intel Core i3-1115G4",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/HP.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 3,
    brand: "Gateway",
    name: "Gateway 23.8 All-in-one Desktop, Fully Adjustable",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/Watch.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 4,
    brand: "Gateway",
    name: "HP 22 All-in-One PC, Intel Pentium Silver J5040",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/Watch.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 5,
    brand: "HP",
    name: "HP Slim Desktop, Intel Celeron J4025, 4GB RAM",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/HP.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 6,
    brand: "Dell",
    name: "Dell Optilex 9020 Small Form Bussiness Desktop",
    price: 2856.3,
    oldprice: 3225.3,
    image: "../assests/Products/Dell.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 7,
    brand: "HP",
    name: "HP 24 All-in-One PC, Intel Core i3-1115G4",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/HP.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 8,
    brand: "Gateway",
    name: "Gateway 23.8 All-in-one Desktop, Fully Adjustable",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/Watch.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 9,
    brand: "Gateway",
    name: "HP 22 All-in-One PC, Intel Pentium Silver J5040",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/Watch.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 10,
    brand: "HP",
    name: "HP Slim Desktop, Intel Celeron J4025, 4GB RAM",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/HP.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 11,
    brand: "Dell",
    name: "Dell Optilex 9020 Small Form Bussiness Desktop",
    price: 2856.3,
    oldprice: 3225.3,
    image: "../assests/Products/Dell.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
  {
    id: 12,
    brand: "HP",
    name: "HP 24 All-in-One PC, Intel Core i3-1115G4",
    price: 2856.3,
    oldprice: 3225.6,
    image: "../assests/Products/HP.png",
    category: "Computers",
    features: [
      "27-inch (diagonal) Retina 5K display",
      "3.1GHz 6-core 10th-generation Intel Core i5",
      "AMD Radeon Pro 5300 graphics",
    ],
    dicount: "-17%",
  },
];
const productsContainer = document.querySelector("#products-container");
function displayProducts() {
  productsContainer.innerHTML = products
    .map(
      (product) => `
        <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="product-card-shop position-relative">
                            <span class="discount-shop badge p-1 rounded-pill position-absolute top-3 start-2">
                                ${product.dicount}
                            </span>
                            <div class="product-img-shop position-relative d-flex justify-content-center align-items-center">
                                <img src="${product.image}" alt="${product.name}">
                                <div class="product-action">
                                    <button>
                                        <i class="bi bi-lightning-charge-fill"></i>
                                    </button>
                                    <button onclick="addtowish(${product.id})">
                                        <i class="bi bi-heart-fill"></i>
                                    </button>
                                    <button>
                                        <i class="bi bi-arrow-repeat"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-info-shop d-flex align-items-center gap-2 flex-column">
                                    <p class="brand-shop">${product.brand}</p>
                                    <h5 class="product-name">
                                        ${product.name}
                                    </h5>
                                    
                                    <div class="price-shop d-flex align-items-center gap-2">
                                        <span class="current-price">$${product.price}</span>
                                        <span class="old-price">$${product.oldprice}</span>
                                    </div>

                                    <button class="btn btn-outline-primary add-to-cart" onclick="addtocart(${product.id})">Add to Cart</button>
                                    <ul class="features-shop mt-2 ps-2">
                                        ${product.features
                                          .map(
                                            (feature) => `
                                            <li> ${feature}</li>
                                            `,
                                          )
                                          .join("")}
                                    </ul>
                                </div>

                        </div>
                    </div> `,
    )
    .join("");
}
displayProducts();
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const addtocart = (productID) => {
  const product = products.find(function (item) {
    return item.id === productID;
  });
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartState();
};

const addtowish = (productID) => {
  let wish = JSON.parse(localStorage.getItem("wish")) || [];
  const product = products.find(function (item) {
    return item.id === productID;
  });
  if (product) {
    const exists = wish.some(function (item) {
      return item.id === productID;
    });
    if(!exists){
      wish.push(product);
      localStorage.setItem("wish", JSON.stringify(wish));
    }
    else{
      alert("This product is already in your wishlist")
    }
  }

  renderWishState();
};
