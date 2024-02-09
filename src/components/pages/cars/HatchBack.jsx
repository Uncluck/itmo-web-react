import React from "react";
import Header from "../../copms/Header";
import Card from "../../views/global/Card";
import Footer from "../../copms/Footer";

const HatchBack = () => {

    const params = [
        ['2016г.в. 5.7, AT, 4WD, 367 л.с,черный',
            'мультимедиа, AUX',
            'подогрев зеркал и сидений',
            'камера заднего хода, передние и задние парктроники'],
        ['2022г.в. 2.0T, AT, 4WD, 249 л.с,черный',
            'мультимедиа, AUX',
            'подогрев зеркал и сидений',
            'камера заднего хода, передние и задние парктроники',
            'панорамная крыша'],
        ['2017г.в. 2.7, AT, 4WD, 163 л.с,черный',
            'мультимедиа, AUX',
            'подогрев зеркал и сидений',
            'камера заднего хода, передние и задние парктроники']
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
                        <Card title={"Lexus 570"} description={params[0]} price={"12 000"} />
                        <Card title={"EXEED VX"} description={params[1]} price={"10 000"} />
                        <Card title={"LC Prado 150"} description={params[2]} price={"10 000"} />
                    </section>
                </section>
            </main>
            <Footer />
        </React.StrictMode>
    );
}

export default HatchBack