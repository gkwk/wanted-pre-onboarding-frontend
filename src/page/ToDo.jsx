// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";
import { useState, useEffect } from "react";


function ToDo() {
    function NavActivator()  {
        document.getElementById('page_todo').className += " active";
    }

    useEffect(() => {
        // console.log(`useEffect`);
        NavActivator();
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            { Header() }

            ToDo

            { Footer() } 
        </div>
    );
};

export default ToDo;