import React from "react";
import Style from './CardFilter.module.scss';

export default function CardFilter() {

    return (
        <>
            <div className={ Style.CardFilter }>
                <ul className={ `d-flex ${ Style.CardFilter_Option }` }>
                    <li>Price Filter</li>
                    <li>Colors Filter</li>  
                    <li>Brand Filter</li>
                </ul>
                <div className={ Style.CardFilter_Result }>
                    
                </div>
                <ul className={ `d-none ${ Style.CardFilter_Button }` }>
                    <li><button>Apply</button></li>
                    <li><button>Cancel</button></li>
                </ul>
            </div>
        </>
    );
}