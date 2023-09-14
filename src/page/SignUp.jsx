import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";
import "./css/Register.css"

function SignUp() {
    const navigate = useNavigate();

    function NavActivator()  {
        document.getElementById('page_signup').className += " active";
    }

    const [form_values, set_form_values] = useState({
        email: "",
        password: "",
    })

    const [form_values_isValidated, set_form_values_isValidated] = useState({
        email: false,
        password: false,
    })

    const form_values_regex = {"email": /^(?=.*[@])/, "password": /^.{8,}/,};
    
    const [form_button_isEnable, set_form_button_isEnable] = useState(true)

    function form_values_Change(event) {
        set_form_values({
            ...form_values,
            [event.target.name]: event.target.value,
        });

        set_form_values_isValidated({
            ...form_values_isValidated,
            [event.target.name]: form_values_regex[event.target.name].test(event.target.value),
        });
    }




    
    function LoginSubmit(event) {
    
    // fetch('https://api.google.com/user', {
    //     method: 'post',
    //     body: JSON.stringify({
    //         "email": document.getElementById('register_floatingemail'),
    //         "password": document.getElementById('register_floatingPassword1'),
    //     })
    // })
    // .then(response => response.json())
    // .then(response => {
    //     if (response.success) {
    //         alert("저장 완료");
    //     }
    // })
        event.preventDefault()
        alert("good" + "\n" +document.getElementById('register_floatingemail').value+ "\n" + document.getElementById('register_floatingPassword1').value);
        navigate("/signin")
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator();
        // set_form_button_isEnable(false)
    }, []);

    useEffect(() => {
        set_form_button_isEnable((form_values_isValidated.email && form_values_isValidated.password))
    }, [form_values_isValidated]);

    return (
        <div className="d-flex flex-column h-100">
            { Header() }

            <div className="register_div">
                <div className="form-signin m-auto">
                <form onSubmit={LoginSubmit}>
                    <div className="text-center">
                        <h1 className="h3 mb-5 fw-normal">Register</h1>
                    </div>

                    <div className="form-floating mb-3">
                        <input data-testid="email-input" type="email" name="email" value={form_values.email} onChange={form_values_Change} className="form-control rounded-3" id="register_floatingemail" placeholder="eamil" required />
                        <label htmlFor="register_floatingemail">Email address</label>
                    </div>

                    <div className="mb-3 text-center">
                        { form_values_isValidated.email ? <br/> : "이메일 유효성 검사 불통과" }
                    </div>

                    <div className="form-floating mb-3">
                        <input data-testid="password-input" type="password" name="password" value={form_values.password} onChange={form_values_Change} className="form-control rounded-3" id="register_floatingPassword1" placeholder="password" required />
                        <label htmlFor="register_floatingPassword1">Password</label>
                    </div>

                    <div className="mb-3 text-center">
                        { form_values_isValidated.password ? <br/> : "암호 유효성 검사 불통과" }
                    </div>

                    <button data-testid="signup-button" disabled={!form_button_isEnable}  className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
                </div>
            </div>

            { Footer() } 
        </div>
    );
};

export default SignUp;