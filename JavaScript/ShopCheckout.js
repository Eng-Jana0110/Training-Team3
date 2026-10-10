/* LOUBNA - Shop Checkout JS */
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("checkoutForm");
  const differentShipping = document.getElementById("differentShipping");
  const shippingFields = document.getElementById("shippingFields");
  const requiredShipping = ["shipName", "shipCountry", "shipAddress", "shipCity"];
  const errorBox = document.getElementById("formError");
  const modal = document.getElementById("successModal");
  const toast = document.getElementById("checkoutToast");
  let discount = 0;
  const shipping = 5;

  function money(n) { return "$" + n.toFixed(2); }
  function toastMessage(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
  }
  function calculate() {
    let subtotal = 0, qty = 0;
    document.querySelectorAll("#orderItems .order-item").forEach(item => {
      subtotal += (Number(item.dataset.price) || 0) * (Number(item.dataset.qty) || 1);
      qty += Number(item.dataset.qty) || 1;
    });
    discount = Math.min(discount, subtotal);
    document.getElementById("subtotal").textContent = money(subtotal);
    document.getElementById("shippingCost").textContent = money(shipping);
    document.getElementById("discountAmount").textContent = "-" + money(discount);
    document.getElementById("discountLine").classList.toggle("d-none", discount <= 0);
    document.getElementById("grandTotal").textContent = money(subtotal + shipping - discount);
    document.getElementById("summaryCount").textContent = qty + (qty === 1 ? " item" : " items");
    return subtotal;
  }
  differentShipping.addEventListener("change", function () {
    shippingFields.classList.toggle("d-none", !this.checked);
    requiredShipping.forEach(id => document.getElementById(id).required = this.checked);
  });
  document.getElementById("applyCoupon").addEventListener("click", function () {
    const code = document.getElementById("coupon").value.trim().toUpperCase();
    const msg = document.getElementById("couponMessage");
    if (code === "WELCOME10") {
      discount = calculate() * 0.10;
      msg.textContent = "Coupon applied: 10% off.";
      msg.style.color = "#198754";
    } else {
      discount = 0;
      msg.textContent = code ? "Invalid code. Try WELCOME10." : "Enter a coupon code first.";
      msg.style.color = "#c0392b";
    }
    calculate();
  });
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorBox.textContent = "";
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      errorBox.textContent = "Please complete all required fields and accept the terms.";
      const invalid = form.querySelector(":invalid");
      if (invalid) invalid.focus();
      return;
    }
    document.getElementById("orderNumber").textContent = "EC-" + Math.floor(100000 + Math.random() * 900000);
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
    toastMessage("Demo complete. No real order was submitted.");
  }
  document.getElementById("closeSuccess").addEventListener("click", closeModal);
  modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("show")) closeModal(); });
  calculate();
});