import React from "react";
import Style from './Login.module.scss';

export default function Login() {

    return (
        <>
            <form action="/" className={ Style.Login }>
                <div className={ `d-flex flex-wrap ${ Style.Login_Input_Type }` }>
                    <label htmlFor="login">UserName</label>
                    <span><i className="fas fa-user"></i></span>
                    <input id="UserName" type="text" />
                </div>
                <div className={ `d-flex flex-wrap ${ Style.Login_Input_Type }` }>
                    <label htmlFor="login">Password</label>
                    <span><i className="fas fa-key"></i></span>
                    <input id="Password" type="password" />
                </div>
                <div className={ `d-flex align-items-center ${ Style.Login_Remember }` }>
                    <span className="d-inline-block text-center"><i className="fas fa-check"></i></span>
                    <p>Remember me</p>
                </div>
                <button className={ Style.Login_Button }>Login</button>
            </form>
        </>
    );
}