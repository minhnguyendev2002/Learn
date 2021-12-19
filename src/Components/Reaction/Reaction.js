import React from "react";
import Style from './Reaction.module.scss';

export default function Reaction() {

    return (
        <>
            <div className="col-1 text-center">
                <div className={ `position-relative ${Style.Reaction}` }>
                    <div className={ `text-center h-100 w-100 ${Style.Reaction_Heart}` }>
                        <span><i className="fas fa-heart"></i></span>
                    </div>
                    <div className={ `position-absolute text-center ${ Style.Reaction_Param }` }>10</div>
                </div>
            </div>
        </>
    );
}