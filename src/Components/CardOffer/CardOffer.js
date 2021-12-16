import React from "react";
import Style from './CardOffer.module.scss';

export default function CardOffer() {

    return (
        <>
            <div className={ `col-12 col-md-6 col-lg-4 ${ Style.CardOffer_Spacing }` }>
                <div className={ Style.CardOffer }>
                    <ul className={ `d-flex justify-content-around ${ Style.CardOffer_Button}` }>
                        <li><button type="button"><i className="fas fa-chevron-left"></i></button></li>
                        <li><button type="button"><i className="fas fa-chevron-right"></i></button></li>
                    </ul>
                    <ul className={ `d-flex flex-wrap ${Style.CardOffer_List}` }>
                        <li>Donald Trump</li>
                        <li>USA</li>
                        <li>JAV</li>
                        <li>Covid-19</li>
                        <li>Politics</li>
                        <li>2020</li>
                    </ul>
                </div>
            </div>
        </>
    );
}