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
    btnSidebarOpen.classList.add("sidebar-open-btn-not-visible");
});

btnSidebarClose.addEventListener("click", function () 
{
    sidebar.classList.remove("sidebar-visible");
    btnSidebarOpen.classList.remove("sidebar-open-btn-not-visible");    
});

const itemCards = document.querySelectorAll(".item-cards");
const infoTasks = document.querySelector(".info-tasks");

itemCards.forEach((itemCard) => 
{
    itemCard.addEventListener("click", function () 
    {
        infoTasks.classList.add("info-tasks-visible");
    });
});

