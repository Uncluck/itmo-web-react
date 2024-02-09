import React from "react";
import Header from "../../copms/Header";
import Card from "../../views/global/Card";
import Footer from "../../copms/Footer";

const Sedan = () => {

    const params = [
        ['2017г.в. 1.4, AT, FWD, 99 л.с, черный',
            'мультимедиа, AUX',
            'подогрев зеркал и сидений',
            'кожаный руль'],
        ['2021г.в. 1.4, AT, FWD, 99 л.с, белый',
            'мультимедиа, AUX',
            'подогрев зеркал и сидений',
            'кожаный руль'],
        ['2021г.в. 1.6, AT, FWD, 113 л.с,коричневый',
            'климат контроль',
            'подогрев зеркал и сидений',
            'круиз контроль',
            'Bluetooth мультимедиа(работает с Алисой), AUX']
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
                <section className={"services"} id={"Cars"}>
                    {/*<SectionCards name={"Автомобили"} count={4}/>*/}
                    <h2>Автомобили</h2>
                    <section className={"cards"}>
                        <Card title={"KIA Rio X"} description={params[0]} price={"2 000"} />
                        <Card title={"KIA Rio X"} description={params[1]} price={"3 000"} />
                        <Card title={"Lada Vesta Cross"} description={params[2]} price={"3 000"} />
                    </section>
                </section>
            </main>
            <Footer />
        </React.StrictMode>
    );
}

export default Sedan