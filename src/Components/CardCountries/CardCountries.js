import React from "react";
import Style from './CardCountries.module.scss';
import $ from 'jquery';
import './CardCountries.css';

$(document).ready(function() {
    $(".List_Option li").click(function() {
        $(".List_Option li").removeClass("select_option");
        $(this).addClass("select_option");
    })
})

export default function CardCountries() {

    let listCountry = [
        {
            img:"../../images/Countries/european-union.png",
            country:"European",
            param:"120"
        },
        {
            img:"../../images/Countries/germany.png",
            country:"Germany",
            param:"16"
        },
        {
            img:"../../images/Countries/united-kingdom.png",
            country:"England",
            param:"22"
        },
        {
            img:"../../images/Countries/vietnam.png",
            country:"VietNam",
            param:"26"
        },
        {
            img:"../../images/Countries/australia.png",
            country:"Australia",
            param:"11"
        },
        {
            img:"../../images/Countries/canada.png",
            country:"Canada",
            param:"21"
        },
        {
            img:"../../images/Countries/france.png",
            country:"France",
            param:"18"
        },
        {
            img:"../../images/Countries/south-korea.png",
            country:"Korea",
            param:"17"
        },
        {
            img:"../../images/Countries/switzerland.png",
            country:"Switzerland",
            param:"19"
        },
        {
            img:"../../images/Countries/united-states.png",
            country:"USA",
            param:"30"
        },
    ]

    let renderUI = listCountry.map((item, index) => {
        return <li key={index}>
                    <img src={ item.img } alt="/" />
                    <p>{ item.country } (+{ item.param })</p>
                    <span className="text-center="><i className="fas fa-check"></i></span>
                </li>
    })

    return (
        <>
            <div className="col-3">
                <div className={ Style.CardCountries }>
                    <div className={ `position-relative ${ Style.CardCountries_Search }` }>
                        <input type="text" placeholder="Search countries"/>
                        <span className="position-absolute d-block text-center"><i className="fas fa-search"></i></span>
                    </div>
                    <ul className={ listCountry.length > 5 ? `List_Option m-0 scroll_bar ${Style.List_Country}` : `List_Option m-0 ${Style.List_Country}` }>
                        { renderUI }
                    </ul>
                    <ul className={ `d-flex ${ Style.CardCountries_Button }` }>
                        <li><button>Login</button></li>
                        <li><button><i className="fas fa-times"></i></button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}