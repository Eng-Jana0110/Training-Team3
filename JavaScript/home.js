/* =========================================================
   DR.LOUBNA - FOOTER JAVASCRIPT
========================================================= */


/* =========================
   NEWSLETTER
========================= */

const dlNewsletterForm =
    document.getElementById("dlNewsletterForm");

const dlNewsletterEmail =
    document.getElementById("dlNewsletterEmail");

const dlNewsletterMessage =
    document.getElementById("dlNewsletterMessage");


if (dlNewsletterForm) {

    dlNewsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            let email =
                dlNewsletterEmail.value.trim();


            if (email === "") {

                dlNewsletterMessage.textContent =
                    "Please enter your email.";

                return;
            }


            if (!email.includes("@")) {

                dlNewsletterMessage.textContent =
                    "Please enter a valid email address.";

                return;
            }


            dlNewsletterMessage.textContent =
                "Thank you for subscribing!";


            dlNewsletterEmail.value = "";
        }
    );

}