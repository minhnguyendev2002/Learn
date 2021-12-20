import React from "react";
import Style from './CardOffer.module.scss';
import './CardOffer.css';

export default function CardOffer() {
    let listTag = ["Donald Trump","USA","Movies","JAV","Covid-19","2020","GenZ","300","Trump","SIA","Me","Covid-19","2020","GenZ","300","Trump","SIA","Me",]

    let renderUI = listTag.map((item, index) => {
        return <li key={ index }>{item}</li>
    })

    return (
        <>
            <div className={ `col-12 col-md-6 col-lg-4 ${ Style.CardOffer_Spacing }` }>
                <div className={ Style.CardOffer }>
                    <ul className={ `d-flex justify-content-around ${ Style.CardOffer_Button}` }>
                        <li><button type="button"><i className="fas fa-chevron-left"></i></button></li>
                        <li><button type="button"><i className="fas fa-chevron-right"></i></button></li>
                    </ul>
                    <div className={ `${Style.CardOffer_List}` }>
                        <ul className={ listTag.length > 8 ? `d-flex flex-wrap Offer_Scrollbar` : `d-flex flex-wrap` }>
                            { renderUI }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}