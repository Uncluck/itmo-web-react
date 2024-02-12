import React from "react";
import Card from "./Card";


const Page = (props) => {
    return (
        <React.StrictMode>
            <section className={"services"} id={"Cars"}>
                {/*<SectionCards name={"Автомобили"} count={4}/>*/}
                <h2>Автомобили</h2>
                <section className={"cards"}>
                    {props.data.map((item) => (
                        <Card
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </section>
            </section>
        </React.StrictMode>
    );
}

export default Page;