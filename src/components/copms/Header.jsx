import React from "react";
import Navigation from "../views/global/Navigation";
import PhoneNumber from "../views/global/PhoneNumber";

function Header() {
    return (
        <header className={"page-header"}>
            <Navigation />
            <PhoneNumber />
            <div className={"header-menu"}>
                <a href="#">
                    <img src="#" alt="logo" width="100%" />
                </a>
            </div>
        </header>
    );
}

export default Header;
