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

    return (
        <>
            <div className="col-4">
                <div className={ Style.CardCountries }>
                    <div className={ `position-relative ${ Style.CardCountries_Search }` }>
                        <input type="text" placeholder="Search countries"/>
                        <span className="position-absolute d-block text-center"><i className="fas fa-search"></i></span>
                    </div>
                    <ul className={ `List_Option m-0 ${Style.List_Country}` }>
                        <li>
                            <img src="../../images/Countries/european-union.png" alt="" />
                            <p>European (+120)</p>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <img src="../../images/Countries/germany.png" alt="" />
                            <p>Germany (+46)</p>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <img src="../../images/Countries/united-kingdom.png" alt="" />
                            <p>United (+76)</p>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                        </li>
                        <li>
                            <img src="../../images/Countries/vietnam.png" alt="" />
                            <p>Vietnam (+202)</p>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                        </li>
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