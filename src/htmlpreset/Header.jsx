// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './css/Header.css';

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="_header">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4"><b>WPOF</b></span>
                </Link>
                
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link" aria-current="page" id="page_home">Home</Link></li>
                    {(localStorage.getItem("access_token")) ? undefined : <li className="nav-item"><Link to="/signin" className="nav-link" id="page_signin">SignIn</Link></li> }
                    {(localStorage.getItem("access_token")) ? undefined : <li className="nav-item"><Link to="/signup" className="nav-link" id="page_signup">SignUp</Link></li> }
                    {(localStorage.getItem("access_token")) ? <li className="nav-item"><Link to="/todo" className="nav-link" id="page_todo">ToDo</Link></li> : undefined }
                </ul>
            </header>
        </div>
    );
}

export default Header;