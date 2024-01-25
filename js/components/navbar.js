let navbarLeft = document.querySelector(".navbar-left"); 
let iconArrowDown = document.querySelector(".iconDropDown");
let sidebarDropDown = document.querySelector(".sidebar-phone");

navbarLeft.addEventListener("click", function () 
{
    if (iconArrowDown.src.includes("icon-arrow-down.svg")) 
    {
        iconArrowDown.src = "../../assets/icons/icon-arrow-up.svg";
        sidebarDropDown.classList.add("sidebar-phone-visible");
    } 
    else 
    {
        iconArrowDown.src = "../../assets/icons/icon-arrow-down.svg";
        sidebarDropDown.classList.remove("sidebar-phone-visible");
    }
});

