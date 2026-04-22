document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("exploreBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            alert("Scroll down to see courses!");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Please fill all fields.");
            }
        });
    }

});
// FAQ click effect
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".accordion-button");

    items.forEach(btn => {
        btn.addEventListener("click", function () {
            console.log("FAQ opened:", this.innerText);
        });
    });
});