"use strict";

import { boardsDataArray } from "../data.js";

const body = document.body;

const createEl = (type, className) =>
{
    let element = document.createElement(type);
    element.className = className;
    return element;
}

const addNewBoardFunc = function ()
{
    let boardNameValue = input.value;
    let id = boardsDataArray.length + 1;

    let newData = boardsDataArray.push( {id: id, title: boardNameValue} );

    return newData;      
}

const addNewBoardForm = function ()
{
    let addNewBoard = createEl("div", "addNewBoardForm");

    let h2 = createEl("h2", "heading-l");
    h2.textContent = "Add New Board";
    h2.style.marginBottom = "12px";

    let nameOfBoard = createEl("div", "name-new-board");
    let p = createEl("p", "body-m-paragraph");
    p.style.color = "var(--Medium-Grey, #828fa3)";
    p.style.marginBottom = "8px";
    p.textContent = "Name";
    let input = createEl("input", "");
    input.placeholder = "e.g. Web Design";
    nameOfBoard.append(p, input);

    let btnAdd = createEl("button", "btn-primary-l body-l-paragraph");
    btnAdd.textContent = "Create New Board";

    btnAdd.addEventListener("click", addNewBoardFunc); 

    addNewBoard.append(h2, nameOfBoard, btnAdd);
    body.append(addNewBoard);
}

const sidebarTop = function ()
{
    let sidebarTop = createEl("div", "sidebar-top");

    let h4 = createEl("h4", "heading-s title");
    h4.textContent = `ALL BOARDS (${boardsDataArray.length})`;
    sidebarTop.append(h4);

    boardsDataArray.map(item => 
    {
        let board = createEl("button", "board heading-m");
        board.textContent = `${item.title}`;

        sidebarTop.append(board);
    });

    let btnAddNewBoard = createEl("button", "add-new-board");
    btnAddNewBoard.textContent = `+Create New Board`;
    btnAddNewBoard.addEventListener("click", () => addNewBoardForm());

    sidebarTop.append(btnAddNewBoard);
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

export { sidebarContainer, addNewBoardFunc };