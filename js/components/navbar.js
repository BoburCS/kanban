"use strict";

let boardsTitle = 
[
    {title: "Platform Launch"},
    {title: "Marketing Plan"},
    {title: "Roadmap"}
];

const createEl = (type, className) =>
{
    let element = document.createElement(type);
    element.className = className;
    return element;
}

const navbarLogo = function ()
{
    let navbarLogo = createEl("div", "navbar-logo");
    let logo = createEl("img");
    logo.src = "../../assets/favicon/logoWithBrand.svg";

    navbarLogo.append(logo);
    return navbarLogo;
}

const navbarLinks = function ()
{
    let navbarLinks = createEl("div", "navbar-links");

    let navbarLeft = createEl("div", "navbar-left");
    let h1 = createEl("h1", "heading-xl");
    h1.textContent = `${boardsTitle[0].title}`;
    navbarLeft.append(h1);

    let navbarRight = createEl("div", "navbar-right");
    let button = createEl("button", "btn-primary-l");
    button.textContent = "+Add New Task";
    let img = createEl("img", "menu--dots");
    img.src = "../../assets/favicon/menu-dots.svg";
    navbarRight.append(button, img);

    navbarLinks.append(navbarLeft, navbarRight);
    return navbarLinks;
}


const navbarContainer = function ()
{
    let navbar = createEl("nav", "navbar");

    navbar.append(navbarLogo(), navbarLinks());
    return navbar;
}

export { navbarContainer };