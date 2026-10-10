const vendors = [
    {
        id: "fashion-hub",
        name: "Fashion Hub",
        category: "fashion",
        categoryName: "Fashion",
        initials: "FH",
        logoClass: "",
        description: "Discover modern clothing and everyday fashion.",
        rating: 4.8,
        products: 125
    },
    {
        id: "tech-world",
        name: "Tech World",
        category: "electronics",
        categoryName: "Electronics",
        initials: "TW",
        logoClass: "logo-blue",
        description: "Explore useful electronics and smart devices.",
        rating: 4.9,
        products: 98
    },
    {
        id: "home-style",
        name: "Home Style",
        category: "home",
        categoryName: "Home & Living",
        initials: "HS",
        logoClass: "logo-orange",
        description: "Beautiful home accessories and practical essentials.",
        rating: 4.6,
        products: 76
    },
    {
        id: "beauty-corner",
        name: "Beauty Corner",
        category: "beauty",
        categoryName: "Beauty",
        initials: "BC",
        logoClass: "logo-purple",
        description: "Discover beauty products and daily care essentials.",
        rating: 4.7,
        products: 64
    },
    {
        id: "sport-zone",
        name: "Sport Zone",
        category: "sports",
        categoryName: "Sports",
        initials: "SZ",
        logoClass: "logo-red",
        description: "Equipment and accessories for an active lifestyle.",
        rating: 4.5,
        products: 83
    },
    {
        id: "urban-store",
        name: "Urban Store",
        category: "fashion",
        categoryName: "Fashion",
        initials: "US",
        logoClass: "logo-dark",
        description: "Casual styles and modern everyday accessories.",
        rating: 4.4,
        products: 52
    }
];

// Page elements
const vendorGrid = document.getElementById("vendor-grid");
const vendorSearch = document.getElementById("vendor-search");
const vendorCategory = document.getElementById("vendor-category");
const vendorSort = document.getElementById("vendor-sort");
const vendorCount = document.getElementById("vendor-count");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-filters");

// Build one vendor card
function createVendorCard(vendor) {
    const card = document.createElement("article");
    card.className = "vendor-card";

    const cover = document.createElement("div");
    cover.className = "vendor-cover";

    const logo = document.createElement("div");
    logo.className = `vendor-logo ${vendor.logoClass}`;
    logo.textContent = vendor.initials;
    logo.setAttribute("aria-label", `${vendor.name} logo`);

    cover.appendChild(logo);

    const info = document.createElement("div");
    info.className = "vendor-info";

    const category = document.createElement("span");
    category.className = "vendor-category";
    category.textContent = vendor.categoryName;

    const title = document.createElement("h3");
    title.textContent = vendor.name;

    const description = document.createElement("p");
    description.className = "vendor-description";
    description.textContent = vendor.description;

    const meta = document.createElement("div");
    meta.className = "vendor-meta";

    const rating = document.createElement("span");
    rating.className = "vendor-rating";
    rating.textContent = `★ ${vendor.rating.toFixed(1)} / 5`;

    const products = document.createElement("span");
    products.textContent = `${vendor.products} products`;

    meta.append(rating, products);

    const actions = document.createElement("div");
    actions.className = "vendor-actions";

    // Link to the individual vendor page
    const viewButton = document.createElement("a");
    viewButton.className = "btn-vendor";
    viewButton.href =
        `single-vendor.html?vendor=${encodeURIComponent(vendor.id)}`;
    viewButton.textContent = "Visit Store";

    // Link to the main shop, with the vendor ID
    const shopButton = document.createElement("a");
    shopButton.className = "btn-vendor btn-outline";
    shopButton.href =
        `shop.html?vendor=${encodeURIComponent(vendor.id)}`;
    shopButton.textContent = "Shop Products";

    actions.append(viewButton, shopButton);
    info.append(category, title, description, meta, actions);
    card.append(cover, info);

    return card;
}

// Display vendor cards
function renderVendors(vendorList) {
    vendorGrid.replaceChildren();

    vendorList.forEach((vendor) => {
        vendorGrid.appendChild(createVendorCard(vendor));
    });

    vendorCount.textContent =
        `${vendorList.length} vendor${vendorList.length !== 1 ? "s" : ""}`;

    emptyState.hidden = vendorList.length !== 0;
    vendorGrid.hidden = vendorList.length === 0;
}

// Search, filter, and sort
function filterVendors() {
    const searchTerm = vendorSearch.value
        .trim()
        .toLowerCase();

    const selectedCategory = vendorCategory.value;
    const sortOption = vendorSort.value;

    let filteredVendors = vendors.filter((vendor) => {
        const matchesSearch =
            vendor.name.toLowerCase().includes(searchTerm) ||
            vendor.categoryName.toLowerCase().includes(searchTerm) ||
            vendor.description.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            vendor.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (sortOption === "name-asc") {
        filteredVendors.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    } else if (sortOption === "name-desc") {
        filteredVendors.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    } else if (sortOption === "rating") {
        filteredVendors.sort((a, b) =>
            b.rating - a.rating
        );
    }

    renderVendors(filteredVendors);
}

// Reset all filters
function resetFilters() {
    vendorSearch.value = "";
    vendorCategory.value = "all";
    vendorSort.value = "default";

    filterVendors();
}

// Event listeners
vendorSearch.addEventListener("input", filterVendors);
vendorCategory.addEventListener("change", filterVendors);
vendorSort.addEventListener("change", filterVendors);
resetButton.addEventListener("click", resetFilters);

// Footer year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Initial render
renderVendors(vendors);