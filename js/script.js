// dark and light mode
document.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.querySelector('.switch input[type = "checkbox"]');
    let body = document.body;
    let svgLogo = document.querySelector(".svg-logo");

    if (checkbox) {
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                body.classList.add("dark-mode");
                svgLogo.src = "../assets/icons/icon-logo-kanban-dark.svg";
            } else {
                body.classList.remove("dark-mode");
                svgLogo.src = "../assets/icons/icon-logo-kanban.svg";
            }
        });
    } else {
        console.error('Checkbox element not found');
    }
});

// sidebar open close
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

// seeing the information about tasks cards
const itemCards = document.querySelectorAll(".item-cards");
const infoTasks = document.querySelector(".info-tasks");

itemCards.forEach((itemCard) => 
{
    itemCard.addEventListener("click", function () 
    {
        infoTasks.classList.toggle("info-tasks-visible");
    });
});


// Checkboxes
const checkboxCards = document.querySelectorAll(".checkbox-cards");

checkboxCards.forEach( (card) => 
{
    let input = card.querySelector("input");
    let label = card.querySelector("label");

    input.addEventListener("change", () => 
    {
        if (input.checked) 
        {
            label.classList.add("label-checked");
        }
        else 
        {
            label.classList.remove("label-checked");        
        }
    });
});

const deleteSubtask = document.querySelector(".info-tasks-header img");
const btnDeleteEdit = document.querySelector(".btn-edit-delete");

deleteSubtask.addEventListener("click", () => 
{
    btnDeleteEdit.classList.toggle("btn-edit-delete-visible");
});

