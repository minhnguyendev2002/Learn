import React from "react";
import Style from './CardApplication.module.scss';
import $ from 'jquery';
import './CardApplication.css';

$(document).ready(function() {
    $(".Application_select li").click(function() {
        $(".Application_select li").removeClass("Select");
        $(this).addClass("Select");
    })
})

export default function CardApplication() {

    return (
        <>
            <div className="col-4">
                <div className={ Style.CardApplication }>
                    <div className={ `position-relative ${ Style.CardApplication_Search }` }>
                        <input type="text" placeholder="Search applicationes"/>
                        <span className="position-absolute d-block text-center"><i className="fas fa-search"></i></span>
                    </div>
                    <ul className={ `position-relative ${Style.CardApplication_Option} Application_select` }>
                        <li>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                            <p>Framer</p>
                        </li>
                        <li>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                            <p>Invision Studio</p>
                        </li>
                        <li>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                            <p>Adobe XD</p>
                        </li>
                        <li>
                            <span className="text-center="><i className="fas fa-check"></i></span>
                            <p>Figma</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}