import React from "react";
import Header from "../../copms/Header";
import Card from "../../views/global/Card";
import Footer from "../../copms/Footer";
import Page from "../../views/global/Page";

const Sedan = () => {

    const data = [
        {
            title: "KIA Rio X",
            description: ['2017г.в. 1.4, AT, FWD, 99 л.с, черный',
                'мультимедиа, AUX',
                'подогрев зеркал и сидений',
                'кожаный руль'],
            price: "2 000"
        },
        {
            title: "KIA Rio X",
            description: ['2021г.в. 1.4, AT, FWD, 99 л.с, белый',
                'мультимедиа, AUX',
                'подогрев зеркал и сидений',
                'кожаный руль'],
            price: "3 000"
        },
        {
            title: "Lada Vesta Cross",
            description: ['2021г.в. 1.6, AT, FWD, 113 л.с,коричневый',
                'климат контроль',
                'подогрев зеркал и сидений',
                'круиз контроль',
                'Bluetooth мультимедиа(работает с Алисой), AUX'],
            price: "3 000"
        }
    ]

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
                <Page data={data}/>
            </main>
            <Footer />
        </React.StrictMode>
    );
}

export default Sedan