import { Link } from "react-router-dom";
import "../styles/Footer.css"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="footer-logo-icon">✓</span>
                            <span className="footer-logo-text">Task Manager</span>
                        </div>
                        <p className="footer-tagline">
                            Organize your life, one task at a time
                        </p>
                        <div className="footer-social">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">🐦</span>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">📘</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">💼</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">💻</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Product</h4>
                        <ul className="footer-links-list">
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/tasks" className="footer-link">My Tasks</Link></li>
                            <li><a href="#features" className="footer-link">Features</a></li>
                            <li><a href="#pricing" className="footer-link">Pricing</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-links-list">
                            <li><a href="#about" className="footer-link">About Us</a></li>
                            <li><a href="#careers" className="footer-link">Careers</a></li>
                            <li><a href="#blog" className="footer-link">Blog</a></li>
                            <li><a href="#press" className="footer-link">Press Kit</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-links-list">
                            <li><a href="#help" className="footer-link">Help Center</a></li>
                            <li><a href="#contact" className="footer-link">Contact Us</a></li>
                            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
                            <li><a href="#terms" className="footer-link">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Task Manager. All rights reserved. Made with ❤️
                    </p>
                    <div className="footer-badges">
                        <span className="footer-badge">🔒 Secure</span>
                        <span className="footer-badge">⚡ Fast</span>
                        <span className="footer-badge">🌍 Global</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;