import React from "react";
import Style from './CardSearch.module.scss';

export default function CardSearch() {

    return (
        <>
            <div className={`col-12 col-md-6 col-lg-6 ${ Style.CardSearch_Spacing }`}>
                <div className={ Style.CardSearch_Search }>
                    <div className="d-flex position-relative">
                        <input type="text" placeholder="Search for articles" />
                        <button><span><i className="fas fa-search"></i></span></button>
                    </div>
                    <ul className="d-flex justify-content-between flex-wrap">
                        <li>#Politics</li>
                        <li>#Sciense</li>
                        <li>#Movies</li>
                        <li>#Technology</li>
                    </ul>
                </div>
            </div>
        </>
    );
}