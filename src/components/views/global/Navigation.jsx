import React from "react";

function Navigation() {
    return (
        <nav className={"main-nav"}>
            <div className={"logo"}>
                <a href="#">
                    <img src="#" alt="logo" width="100%" />
                </a>
            </div>
            <ul className={"site-navigation"}>
                <li className={"site-navigation-item"}>
                    <a href="#">Главная</a>
                </li>
                <li className={"site-navigation-item"}>
                    <a href="">Транспорт</a>
                    <ul className={"submenu"}>
                        <li><a href="#">Автомобили</a>
                            <ul className={"submenu"}>
                                <li className={"submenu-item"}><a href="#">Седан</a></li>
                                <li className={"submenu-item"}><a href="">Хэтчбек</a></li>
                                <li className={"submenu-item"}><a href="">Кроссовер</a></li>
                                <li className={"submenu-item"}><a href="#">Джип</a></li>
                            </ul>
                        </li>
                        <li><a href="#" id={"bike"}>Велосипеды</a>
                            <ul className={"submenu"}>
                                <li className={"submenu-item"}><a href="#">Спортивные</a></li>
                                <li className={"submenu-item"}><a href="#">Городские</a></li>
                            </ul>
                        </li>
                        <li><a href="" id={"scooter"}>Самокаты</a>
                            <ul className={"submenu"}>
                                <li className={"submenu-item"}><a href="">Электро-Самокаты</a></li>
                                <li className={"submenu-item"}><a href="">Самокаты</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={"site-navigation-item"}>
                    <a href="#">Условия аренды</a>
                </li>
                <li className={"site-navigation-item"}>
                    <a href="#">Отзывы</a>
                </li>
                <li className={"site-navigation-item"}>
                    <a href="#">Заказ звонка</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;