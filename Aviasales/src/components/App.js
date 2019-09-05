import React from "react";

import Filter from "./Filter";
import Logo from "../img/Logo.svg";
import "./App.css";

export default () => (
    <>
        <img className="logo" src={Logo} alt="logo" />
        <Filter />
    </>
);
