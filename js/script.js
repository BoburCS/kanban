document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.querySelector('.switch input[type = "checkbox"]');
    let body = document.body;
    let svgLogo = document.querySelector(".svg-logo");

    if (checkbox) {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                body.classList.add("dark-mode");
                svgLogo.src = "../icons/icon-kanban-logo-dark.svg";
            } else {
                body.classList.remove("dark-mode");
                svgLogo.src = "../icons/icon-logo-kanban.svg";
            }
        });
    } else {
        console.error('Checkbox element not found');
    }
});







