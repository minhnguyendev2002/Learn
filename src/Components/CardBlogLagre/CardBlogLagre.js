import React from "react";
import Style from './CardBlogLagre.module.scss';

export default function Chart() {

    return (
        <>
            <div className={ `col-12 col-lg-8` }>
                <div className={ `bg-white ${ Style.blog_root }` }>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className={ Style.blog_background }>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className={ Style.blog_content }>
                                <h2>Content Marketing has always been evaluated as one of the online marketing strategies...</h2>
                                <p>Instead of using forms of advertising your products/services, you should provide really useful content to customers, thereby persuading/solving the problems and problems that are.</p>
                                <ul className="d-flex justify-content-between align-items-center">
                                    <li className={`d-flex align-items-center ${ Style.blog_author }`}>
                                        <img src="../../images/avatar.jpg" alt="/" />
                                        <div>
                                            <h3>Alexander Parkinson</h3>
                                            <span>20 June, 2020</span>
                                        </div>
                                    </li>
                                    <li className={Style.Card_Blog__share}><span><i className="fas fa-share"></i></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}