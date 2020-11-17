import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="footer__content">
                    <div className="footer__content--left-section">Logo</div>

                    <div className="footer__content--right-section">
                        <div className="first-col">
                            <ul>
                                Product
                                <li>Log In</li>
                                <li>Sign In</li>
                                <li>How it works</li>
                                <li>Features</li>
                                <li>Testimonials</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="second-col">
                            <ul>
                                Support
                                <li>Help Center</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                                <li>Do Not Sell My Info</li>
                                <li>Accessibility</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__bottom--content">© 2020 CREATED BY VOGUE-DEV</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
