import React from 'react';
import { useEffect } from "react";
import Header from "../htmlpreset/Header";
import Footer from "../htmlpreset/Footer";



function Main() {
    function NavActivator()  {
        document.getElementById('page_home').className += " active";
    }

    useEffect(() => {
        NavActivator()
    }, []);

    return (
        <div className="d-flex flex-column h-100">
            
            { Header() } 

            <main className='h-100'>

                <div id="_content"  className="d-flex align-items-center container h-100">
                    <div className='text-center w-100'>
                        <h1><b>Wanted Pre Onboarding Frontend</b></h1>
                    </div>
                    
                </div>

            </main>

            { Footer() } 
        </div>
    );
}

export default Main;