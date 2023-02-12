import React from 'react'
import cardFront from "../assets/images/bg-card-front.png"
import cardFrontAvif from "../assets/images/bg-card-front.avif"
import cardFrontWebp from "../assets/images/bg-card-front.webp"
import cardBack from "../assets/images/bg-card-back.png"
import cardBackAvif from "../assets/images/bg-card-back.avif"
import cardBackWebp from "../assets/images/bg-card-back.webp"

import cardLogo from "../assets/images/card-logo.svg"

function Cards({name, number, month, year, cvc}) {
    return (
        <div className="cards">
            <div className="card">
                <picture>
                    <source srcSet={cardFrontAvif} type="image/avif" />
                    <source srcSet={cardFrontWebp} type="image/webp" />
                    <img src={cardFront} alt="image card front" className="card__image" width={447} height={245} />
                </picture>
                <img src={cardLogo} alt="card logo" className="card__logo" width={84} height={47} />
                <p className="card__number" id="card-number">{number || '0000 0000 0000 0000'}</p>
                <p className="card__name" id="card-name">{name.toUpperCase() || 'JANE APPLESEED'}</p>
                <div className="card__date">
                    <span id="card-month">{month || '00'}</span>/<span id="card-year">{year || '00'}</span>
                </div>
            </div>
            <div className="card">
                <picture>
                   <source srcSet={cardBackAvif} type="image/avif" />
                   <source srcSet={cardBackWebp} type="image/webp" />
                   <img src={cardBack} alt="image card back" className="card__image" width={447} height={245} />
                </picture>
                <p className="card__cvc" id="card-cvc">{cvc || '000'}</p>
            </div>
        </div>
    )
}

export default Cards