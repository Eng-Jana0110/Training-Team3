// مصفوفة البيانات الخاصة بكروت الميزات//
const featuresData = [
  {
    iconClass: "fa-solid fa-truck-fast",
    title: "Free Delivery",
    subtitle: "From all orders over $10",
  },
  {
    iconClass: "fa-regular fa-comments",
    title: "Support 24/7",
    subtitle: "Shop with an expert",
  },
  {
    iconClass: "fa-solid fa-gift",
    title: "Gift voucher",
    subtitle: "Refer a friend",
  },
  {
    iconClass: "fa-solid fa-rotate-left",
    title: "Return & Refund",
    subtitle: "Free return over $200",
  },
  {
    iconClass: "fa-solid fa-shield-halved",
    title: "Secure payment",
    subtitle: "100% Protected",
  },
];

// دالة لطباعة العناصر داخل الصفحة مع مراعاة تجاوب شبكة Bootstrap
function renderFeatures() {
  const container = document.getElementById("features-container");

  if (!container) return;

  const featuresHTML = featuresData
    .map(
      (item) => `
    <div class="col-12 col-sm-6 col-md-4 col-lg">
      <div class="feature-card d-flex align-items-center h-100">
        <div class="feature-icon me-3">
          <i class="${item.iconClass}"></i>
        </div>
        <div>
          <h6 class="feature-title">${item.title}</h6>
          <p class="feature-subtitle">${item.subtitle}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  container.innerHTML = featuresHTML;
}

// تشغيل الدالة بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", renderFeatures);
