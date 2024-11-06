import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>About Us</h3>
                        <p>We are a company dedicated to providing the best services to our customers.</p>
                    </div>
                    <div class="footer-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: info@company.com</li>
                            <li>Phone: +123 456 7890</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h3>Follow Us</h3>
                        <ul class="social-media">
                            <li><a href="f">Facebook</a></li>
                            <li><a href="t">Twitter</a></li>
                            <li><a href="i">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
