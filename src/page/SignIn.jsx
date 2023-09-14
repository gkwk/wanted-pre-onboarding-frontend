// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";
import "./css/SignIn.css"


function SignIn() {
    function NavActivator()  {
        document.getElementById('page_signin').className += " active";
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            { Header() }


            <div className="register_div">
                <div className="form-signin m-auto">
                <form method="post" action="#">
                    <div className="text-center">
                        <h1 className="h3 mb-5 fw-normal">LogIn</h1>
                    </div>

                    <div className="form-floating mb-3">
                        <input data-testid="email-input" type="email" name="username" className="form-control rounded-3" id="register_floatingemail" placeholder="eamil" required />
                        <label htmlFor="register_floatingemail">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input data-testid="password-input" type="password" name="password1" className="form-control rounded-3" id="register_floatingPassword1" placeholder="password" required />
                        <label htmlFor="register_floatingPassword1">Password</label>
                    </div>

                    {/* <div className="form-floating mb-3">
                        <input data-testid="password-input" type="password" name="password2" className="form-control rounded-3" id="register_floatingPassword2" placeholder="password_confirm" required />
                        <label htmlFor="register_floatingPassword2">Password confirm</label>
                    </div> */}

                    <button data-testid="signin-button" className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
                </div>
            </div>

            {/* <input data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button> */}

            { Footer() } 
        </div>
    );
};

export default SignIn;