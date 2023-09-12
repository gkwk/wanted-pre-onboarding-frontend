// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";


function SignUp() {
    function NavActivator()  {
        document.getElementById('page_signup').className += " active";
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            { Header() }

            SignUp

            { Footer() } 
        </div>
    );
};

export default SignUp;