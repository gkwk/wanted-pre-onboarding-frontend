import { Link } from 'react-router-dom';
import './css/Header.css';
import AuthCheck from "../page/AuthCheck"

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" id="_header">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4"><b>WPOF</b></span>
                </Link>
                
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link" aria-current="page" id="page_home">Home</Link></li>
                    <li className="nav-item"><Link to="/signin" className="nav-link" id="page_signin" hidden={AuthCheck()}>SignIn</Link></li>
                    <li className="nav-item"><Link to="/signup" className="nav-link" id="page_signup" hidden={AuthCheck()}>SignUp</Link></li>
                    <li className="nav-item"><Link to="/signout" className="nav-link" id="page_signout" hidden={!AuthCheck()}>SignOut</Link></li>
                    <li className="nav-item"><Link to="/todo" className="nav-link" id="page_todo" hidden={!AuthCheck()}>ToDo</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;