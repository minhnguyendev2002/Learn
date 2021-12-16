import React from "react";
import Style from './CardAdress.module.scss';

export default function CardAdress() {

    return (
        <>
            <div className={ `col-6 ${ Style.CardAdress_Spacing }` }>
                <div className={ Style.CardAdress }>
                    <div className="row">
                        <div className="col-6">
                            <div className={ Style.CardAdress_Bgr }></div>
                        </div>
                        <div className="col-6">
                            <div className={ Style.CardAdress_Content }>
                                <span><i className="far fa-play-circle"></i></span>
                                <h3>An Inspiring Short Flim</h3>
                                <span><i className="fas fa-eye"></i>80,989</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}