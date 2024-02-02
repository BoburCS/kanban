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

const sidebarTop = function ()
{
    let sidebarTop = createEl("div", "sidebar-top");

    let h4 = createEl("h4", "heading-s title");
    h4.textContent = `ALL BOARDS (${boardsTitle.length})`;
    sidebarTop.append(h4);

    boardsTitle.map(item => 
    {
        let board = createEl("button", "board heading-m");
        board.textContent = `${item.title}`;
        sidebarTop.append(board);
    });

    return sidebarTop;
}

const sidebarBottom = function ()
{
    let sidebarBottom = createEl("div");

    return sidebarBottom;
}

const sidebarContainer = function ()
{
    let sidebar = createEl("aside", "sidebar");

    sidebar.append(sidebarTop(), sidebarBottom());
    return sidebar;
}

export { sidebarContainer };