import './css/Footer.css';
import logo from '../W_logo.svg';

function Footer() {
    return (
        <div className="container mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id="_footer">
                <div className="col-md-4 d-flex align-items-center">
                    <img src={logo} className="footer_logo me-3" alt="logo" />
                    <span className="mb-3 mb-md-0 link-dark">WPOF</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;