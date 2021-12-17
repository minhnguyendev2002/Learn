import React from "react";

export default function SlideItem(props) {

    return (
        <>
            <div className={ `timeline-carousel__item ${ props.className }` }>
                <img src={ props.image } alt="/" />
            </div>
        </>
    );
}