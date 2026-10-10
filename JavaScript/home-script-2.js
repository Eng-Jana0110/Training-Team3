document.addEventListener("DOMContentLoaded", () => {
 
  const toast = document.getElementById("toast");
  const show = (m) => {
    toast.textContent = m;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 1600);
  };
  
  
  document.getElementById("searchForm").onsubmit = (e) => {
    e.preventDefault();
    let q = document.getElementById("searchInput").value.toLowerCase(),
      n = 0;
    document.querySelectorAll(".hp-product").forEach((c) => {
      let ok = c.textContent.toLowerCase().includes(q);
      c.style.display = ok ? "" : "none";
      if (ok) n++;
    });
    show(n + " product(s) found");
  };
  document.getElementById("newsletter").onsubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    show("Thank you for subscribing!");
  };
  let end = Date.now() + 259200000;
  setInterval(() => {
    let t = Math.max(0, end - Date.now()),
      d = Math.floor(t / 86400000),
      h = Math.floor(t / 3600000) % 24,
      m = Math.floor(t / 60000) % 60,
      s = Math.floor(t / 1000) % 60;
    document.getElementById("timer").textContent = [d, h, m, s]
      .map((x) => String(x).padStart(2, "0"))
      .join(" : ");
  }, 1000);
});
