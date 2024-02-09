import React from "react";
import Header from "../copms/Header";
import Footer from "../copms/Footer";
import Card from "../views/global/Card";
import SectionCards from "../views/global/SectionCards";
import Sedan from "./cars/Sedan";
import {Link, Route, Router} from "react-router-dom";
import Reviews from "../views/local/Reviews";

function Main() {
    const cardParams = {
        title: "Спортивные",
        description: "Хэтчбек",
        price: 3000
    }

    return (
        <React.StrictMode>
            <Header />
            <main>
                <p className="scroll-to-start">
                    <a href="#">
                        <img src="#" alt="scroll" />
                    </a>
                </p>
                <div>
                    <h1>Прокат</h1>
                </div>
                <section className={"services"} id={"Cars"}>
                    {/*<SectionCards name={"Автомобили"} count={4}/>*/}
                    <h2>Автомобили</h2>
                    <section className={"cards"}>
                        <Card title={"Седан"} description={"Solaris, Kia rio"} price={"1 000"} />
                        <Card title={"Хэтчбек"} description={"Kia RioX, Vesta Cross, Matiz"} price={"4 000"} />
                        <Card title={"Кроссовер"} description={"Chery Tiggo, Hyundai SantaFe, Lexus"} price={"6 000"} />
                        <Card title={"Джип"} description={"RAM, Toyota, Lexus, Exceed"} price={"13 000"} />
                    </section>
                    <h2>Велосипеды</h2>
                    <section className={"cards"}>
                        <Card title={"Спортивные"} description={"Stinger, Titan Racing"} price={"1 000"} />
                        <Card title={"Городские"} description={"Stels Energy III, Stinger Toledo"} price={"750"} />
                    </section>
                    <h2>Самокаты</h2>
                    <section className={"cards"}>
                        <Card title={"ЭлектроСамокаты"} description={"Xiaomi, Segway-Ninebot"} price={"50"} />
                        <Card title={"Самокаты"} description={"Ninebot, YBIKE, Artway"} price={"250"} />
                    </section>
                </section>
            </main>
            <Reviews />
            <Footer />
        </React.StrictMode>
    );
}

export default Main;
