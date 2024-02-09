import React from "react";
import PhoneNumber from "../views/global/PhoneNumber";


function Footer() {
    return (
        <footer className={"footer-logo-name"}>
            <div className={"footer-logo"}>
                <a href="#">
                    <img src="#" alt="logo" width="100%" />
                </a>
            </div>
            <h2 className={"footer-h"}>Прокат</h2>
            <PhoneNumber />
            <div className={"social-media"} id={"load"}>
                <div className={"footer-logo"}>
                    <a href="#">
                        <img src="#" alt="logo" width="100%" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
