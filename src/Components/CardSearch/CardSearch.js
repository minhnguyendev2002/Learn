import React from "react";
import Style from './CardSearch.module.scss';
import './CardSearch.css';

export default function CardSearch() {
    let listTag = ["Politics","Sciense","Movies","Technology","Covid-19","Alex-Gru","GenZ","300","Trump","SIA","Me",]

    let renderUI = listTag.map((item, index) => {
        return <li key={ index }>#{item}</li>
    })

    return (
        <>
            <div className={`col-12 col-md-6 col-lg-6 ${ Style.CardSearch_Spacing }`}>
                <div className={ Style.CardSearch_Search }>
                    <div className="d-flex position-relative">
                        <input type="text" placeholder="Search for articles" />
                        <button><span><i className="fas fa-search"></i></span></button>
                    </div>
                    <ul className={ listTag.length > 5 ? "d-flex flex-nowrap scrollbar" : "d-flex flex-nowrap" }>
                        { renderUI }
                    </ul>
                </div>
            </div>
        </>
    );
}