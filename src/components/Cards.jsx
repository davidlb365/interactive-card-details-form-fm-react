import React from 'react'
import cardFront from "../assets/images/bg-card-front.png"
import cardBack from "../assets/images/bg-card-back.png"
import cardLogo from "../assets/images/card-logo.svg"

function Cards({name, number, month, year, cvc}) {
    return (
        <div className="cards">
            <div className="card">
                <img src={cardFront} alt="front card" className="card__image" />
                <img src={cardLogo} alt="card logo" className="card__logo" />
                <p className="card__number" id="card-number">{number || '0000 0000 0000 0000'}</p>
                <p className="card__name" id="card-name">{name.toUpperCase() || 'JANE APPLESEED'}</p>
                <div className="card__date">
                    <span id="card-month">{month || '00'}</span>/<span id="card-year">{year || '00'}</span>
                </div>
            </div>
            <div className="card">
                <img src={cardBack} alt="back card" className="card__image" />
                <p className="card__cvc" id="card-cvc">{cvc || '000'}</p>
            </div>
        </div>
    )
}

export default Cards