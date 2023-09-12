// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from "react";
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";



function Main() {
    function NavActivator()  {
        document.getElementById('page_home').className += " active";
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator()
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            
            { Header() } 

            <main>

                <div id="_content">

                </div>

            </main>

            { Footer() } 
        </div>
    );
}

export default Main;