import React from "react";
import Style from './CardArtist.module.scss';

export default function CardArtist() {

    return (
        <>
            <div className={ `col-12 col-md-6 col-lg-8 ${ Style.CardArtist_Spacing }` }>
                <div className={ Style.CardArtist }>
                    <div className="row">
                        <div className="col-12 col-xl-5">
                            <div className={ Style.CardArtist_Bgr }></div>
                        </div>
                        <div className="col-12 col-xl-7">
                            <div className={ Style.CardArtist_Infor }>
                                <h3>Alex Morrison</h3>
                                <span>Senior Developer</span>
                                <ul className={ `d-flex align-items-center text-center ${ Style.CardArtist_Param }` }>
                                    <li>
                                        <p>Articles</p>
                                        <span>34</span>
                                    </li>
                                    <li>
                                        <p>Followers</p>
                                        <span>980</span>
                                    </li>
                                    <li>
                                        <p>Rating</p>
                                        <span>8.9</span>
                                    </li>
                                </ul>
                                <ul className={ `d-flex flex-wrap justify-content-around ${ Style.CardArtist_ButtonList }` }>
                                    <li><button>Chat</button></li>
                                    <li><button>Follow</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}