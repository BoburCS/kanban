"use strict";

const qs = tag => document.querySelector(tag);
const getID = tag => document.getElementById(tag);

const root = getID("root");

import { headerContainer } from "./components/header.js";


window.addEventListener("DOMContentLoaded", function ()
{
    root.append(headerContainer());
});
