// Bootstrap form validation for login.html and register.html
document.querySelectorAll(".needs-validation").forEach(form => {
  const pass = form.querySelector("#rp");
  const confirm = form.querySelector("#rc");
  const user = form.querySelector("#le");
  const remember = form.querySelector("#lr");

  // Register: the two passwords must match
  if (pass && confirm) {
    const check = () => confirm.setCustomValidity(confirm.value === pass.value ? "" : "mismatch");
    pass.addEventListener("input", check);
    confirm.addEventListener("input", check);
  }

  // Login: restore the remembered username
  if (user && remember && localStorage.getItem("rememberUser")) {
    user.value = localStorage.getItem("rememberUser");
    remember.checked = true;
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) return;

    if (user && remember) {
      if (remember.checked) localStorage.setItem("rememberUser", user.value);
      else localStorage.removeItem("rememberUser");
    }

    document.getElementById("msg").innerHTML =
      '<div class="alert alert-success mt-3">Done (demo). Connect this form to your server.</div>';
  });
});
