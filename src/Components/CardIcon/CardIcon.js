import React from "react";
import Style from './CardIcon.module.scss';

export default function IconList() {

    return (
        <div className="col-4">
            <div className={ Style.Icon_List }>
                <ul>
                    <li>
                        <span><i className="far fa-circle"></i></span>
                        <p>Global</p>
                    </li>
                    <li>
                        <span><i className="fas fa-project-diagram"></i></span>
                        <p>Business</p>
                    </li>
                    <li>
                        <span><i className="fas fa-play"></i></span>
                        <p>Entertainment</p>
                    </li>
                    <li>
                        <span><i className="fab fa-shirtsinbulk"></i></span>
                        <p>Sports</p>
                    </li>
                    <li>
                        <span><i className="fas fa-dumbbell"></i></span>
                        <p>Health</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}