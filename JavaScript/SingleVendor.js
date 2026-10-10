document.addEventListener("DOMContentLoaded", function () {

    // Demo vendor data.
    // Replace this information with the real vendor data later.

    const vendor = {
        name: "Urban Threads",
        category: "Fashion & Clothing",
        description:
            "Discover modern styles, clothing, and everyday essentials.",
        about:
            "Urban Threads offers modern clothing and versatile everyday essentials. The store focuses on comfortable styles and practical products for different occasions.",
        rating: "4.9",
        productsCount: 128
    };

    // Demo products belonging to this vendor.

    const products = [
        {
            name: "Classic Everyday Jacket",
            category: "Outerwear",
            price: 59.99,
            rating: 4.9,
            icon: "bi-person-standing",
            art: "art-one"
        },
        {
            name: "Minimal City Backpack",
            category: "Accessories",
            price: 42.50,
            rating: 4.8,
            icon: "bi-backpack",
            art: "art-two"
        },
        {
            name: "Soft Cotton T-Shirt",
            category: "Clothing",
            price: 24.99,
            rating: 4.7,
            icon: "bi-person-arms-up",
            art: "art-three"
        },
        {
            name: "Everyday Shoulder Bag",
            category: "Bags",
            price: 36.00,
            rating: 4.8,
            icon: "bi-handbag",
            art: "art-four"
        },
        {
            name: "Comfort Knit Sweater",
            category: "Clothing",
            price: 48.00,
            rating: 4.6,
            icon: "bi-brightness-high",
            art: "art-five"
        },
        {
            name: "Urban Travel Cap",
            category: "Accessories",
            price: 18.99,
            rating: 4.5,
            icon: "bi-sun",
            art: "art-six"
        }
    ];

    const productGrid = document.getElementById("sv-product-grid");
    const searchInput = document.getElementById("sv-product-search");
    const sortSelect = document.getElementById("sv-product-sort");
    const noProducts = document.getElementById("sv-no-products");
    const followButton = document.getElementById("sv-follow-btn");

    // Display vendor information.

    [
        "sv-cover-name",
        "sv-profile-name",
        "sv-about-name"
    ].forEach(function (id) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = vendor.name;
        }
    });

    const coverDescription =
        document.getElementById("sv-cover-description");

    const aboutText =
        document.getElementById("sv-about-text");

    if (coverDescription) {
        coverDescription.textContent = vendor.description;
    }

    if (aboutText) {
        aboutText.textContent = vendor.about;
    }

    [
        "sv-profile-category",
        "sv-info-category"
    ].forEach(function (id) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = vendor.category;
        }
    });

    [
        "sv-cover-rating",
        "sv-info-rating"
    ].forEach(function (id) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = vendor.rating;
        }
    });

    [
        "sv-cover-products",
        "sv-info-products"
    ].forEach(function (id) {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = vendor.productsCount;
        }
    });

    // Render products and apply search/sorting.

    function renderProducts() {

        const searchTerm =
            searchInput.value.trim().toLowerCase();

        let filteredProducts = products.filter(function (product) {

            const searchableText =
                (product.name + " " + product.category).toLowerCase();

            return searchableText.includes(searchTerm);
        });

        if (sortSelect.value === "price-low") {

            filteredProducts.sort(function (a, b) {
                return a.price - b.price;
            });

        } else if (sortSelect.value === "price-high") {

            filteredProducts.sort(function (a, b) {
                return b.price - a.price;
            });

        } else if (sortSelect.value === "name") {

            filteredProducts.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
        }

        productGrid.innerHTML = filteredProducts.map(
            function (product) {

                return `
                    <article class="sv-product-card">

                        <div class="sv-product-art ${product.art}">
                            <i class="bi ${product.icon}"
                               aria-hidden="true"></i>
                        </div>

                        <div class="sv-product-info">

                            <div class="sv-product-category">
                                ${product.category}
                            </div>

                            <h3>${product.name}</h3>

                            <div class="sv-product-rating">
                                <i class="bi bi-star-fill"></i>
                                ${product.rating.toFixed(1)}
                            </div>

                            <div class="sv-product-price-row">

                                <span class="sv-product-price">
                                    $${product.price.toFixed(2)}
                                </span>

                                <a
                                    class="sv-product-link"
                                    href="./shop.html"
                                    aria-label="View ${product.name}">
                                    <i class="bi bi-arrow-up-right"></i>
                                </a>

                            </div>

                        </div>

                    </article>
                `;
            }
        ).join("");

        noProducts.classList.toggle(
            "d-none",
            filteredProducts.length > 0
        );

        productGrid.classList.toggle(
            "d-none",
            filteredProducts.length === 0
        );
    }

    // Search products.

    searchInput.addEventListener("input", renderProducts);

    // Sort products.

    sortSelect.addEventListener("change", renderProducts);

    // Follow Store button.

    followButton.addEventListener("click", function () {

        const isFollowing =
            this.classList.toggle("is-following");

        this.setAttribute(
            "aria-pressed",
            String(isFollowing)
        );

        if (isFollowing) {

            this.innerHTML = `
                <i class="bi bi-heart-fill"></i>
                <span>Following</span>
            `;

        } else {

            this.innerHTML = `
                <i class="bi bi-heart"></i>
                <span>Follow Store</span>
            `;
        }
    });

    // Display products when the page loads.

    renderProducts();

});