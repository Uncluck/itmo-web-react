import React from "react";



const Card = (props) => {

    const {title, description, price} = props
    const renderDescription = (description) => {
        if (Array.isArray(description)) {
            return descriptionList(description);
        } else {
            return descriptionP(description);
        }
    };

    const descriptionList = (props) => {
        return (
            <ul className="car-info">
                {props.map(item => {
                    return (
                        <li className="car-info-item">{item}</li>
                    )
                })}
            </ul>
        )
    }

    const descriptionP = (props) => {
        return (
            <p className={"card-description"}>{props}</p>
        )
    }

    return (
        <div className={"card"}>
            <div className={"div-img"}>
                <img className={"card-img"} src="#" />
            </div>
            <div className={"card-content"}>
                <h3 className={"card-title"}>{title}</h3>
                {renderDescription(description)}
            </div>
            <div className={"card-price"}>
                <span className={"card-price-name"}>Цена от:</span>
                <span className={"card-price-value"}>{`${price} ₽`}</span>
            </div>
            <div className={"card-button-add"}>
                <button className={"card-add"}>Выбрать</button>
            </div>
        </div>
    )
}

export default Card;