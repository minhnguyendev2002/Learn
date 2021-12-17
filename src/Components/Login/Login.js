import React from "react";
import Style from './Login.module.scss';
import $ from 'jquery';

export default function Login() {
    $(document).ready(function() {
        $('.remember').click(function() {
            $(this).addClass('check');
        })
    })

    return (
        <>
            <div className="col-12">
                <form action="/" className={ Style.Login }>
                    <div className={ `d-flex ${ Style.Login_Input_Type }` }>
                        <span><i className="fas fa-user"></i></span>
                        <input id="UserName" type="text" placeholder=" " />
                        <label htmlFor="login">UserName</label>
                    </div>
                    <div className={ `d-flex ${ Style.Login_Input_Type }` }>
                        <span><i className="fas fa-key"></i></span>
                        <input id="Password" type="password" placeholder=" " />
                        <label htmlFor="login">Password</label>
                    </div>
                    <div className={ `d-flex remember align-items-center ${ Style.Login_Remember }` }>
                        <span className="d-inline-block text-center"><i className="fas fa-check"></i></span>
                        <p>Remember me</p>
                    </div>
                    <button className={ Style.Login_Button }>Login</button>
                </form>
            </div>
        </>
    );
}