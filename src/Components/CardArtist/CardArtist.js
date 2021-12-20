import React from "react";
import Style from './CardArtist.module.scss';

export default function CardArtist() {
    let inforArtists = [
        {
            articles: 34,
            follower: 2600,
            rating: 9.6
        }
    ]

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
                                        <span>{ inforArtists[0].articles }</span>
                                    </li>
                                    <li>
                                        <p>Followers</p>
                                        <span>{ inforArtists[0].follower > 1000 ? `${inforArtists[0].follower / 1000}K` : inforArtists[0].follower }</span>
                                    </li>
                                    <li>
                                        <p>Rating</p>
                                        <span>{ inforArtists[0].rating }</span>
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