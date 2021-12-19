import React from "react";
import Style from './Login.module.scss';
import $ from 'jquery';
import './Login.css';

$(document).ready(function() {
    $('.remember').click(function () {
        $(this).toggleClass("checked");
    })
})

export default function Login() {
    return (
        <>
            <div className="col-3">
                <form action="/" className={ Style.Login }>
                    <div className={ `${ Style.Login_Input_Type }` }>
                        <input id="UserName" type="text" placeholder=" " />
                        <label htmlFor="login">UserName</label>
                        <span><i className="fas fa-user"></i></span>
                    </div>
                    <div className={ `${ Style.Login_Input_Type }` }>
                        <input id="Password" type="password" placeholder=" " />
                        <label htmlFor="login">Password</label>
                        <span><i className="fas fa-key"></i></span>
                    </div>
                    <div className={ `d-flex align-items-center ${ Style.Login_Remember }` }>
                        <span className="d-inline-block text-center remember"><i className="fas fa-check"></i></span>
                        <p>Remember me</p>
                    </div>
                    <button className={ Style.Login_Button }>Login</button>
                </form>
            </div>
        </>
    );
}