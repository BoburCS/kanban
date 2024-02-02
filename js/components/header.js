"use strict";

import { navbarContainer } from "./navbar.js";
import { sidebarContainer } from "./sidebar.js";

const createEl = (type, className) =>
{
    let element = document.createElement(type);
    element.className = className;
    return element;
}

const headerContainer = function ()
{
    let header = createEl("header", "header");

    header.append(navbarContainer(), sidebarContainer());
    return header;
}

export { headerContainer };