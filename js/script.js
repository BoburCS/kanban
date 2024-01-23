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

const btnSidebarOpen = document.querySelector(".sidebar-open-btn");
const btnSidebarClose = document.querySelector(".sidebar-close-btn");
const sidebar = document.querySelector(".sidebar");

btnSidebarOpen.addEventListener("click", function () 
{
    sidebar.classList.add("sidebar-visible");
    btnSidebarOpen.style.display = "none";
});

btnSidebarClose.addEventListener("click", function () 
{
    sidebar.classList.remove("sidebar-visible");
    btnSidebarOpen.style.display = "block";
    
});





