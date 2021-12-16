import React from "react";
import Style from './CardBlog.module.scss';

export default function CardBlog() {

    return (
        <>
            <div className={ `col-3 ${ Style.Card_Blog_spacing }` }>
                <div className={ Style.Card_Blog}>
                    <div className={ Style.Card_Blog_Image }></div>
                    <div className={ Style.Card_Blog_Content }>
                        <h4>Content Marketing has always been evaluated as one been evaluated </h4>
                        <div className={`d-flex align-items-center ${ Style.Card_Blog_author }`}>
                            <img src="../../images/avatar.jpg" alt="/" />
                            <div>
                                <h3>Alexander Parkinson</h3>
                                <span>20 June, 2020</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}