import "./index.css"

const Footer = () => (

    <div className="footer">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download App for Android and IOS mobile phone.</p>
                <div className="app-logo">
                    <img src="../../play-store-logo.png" alt="play store" />
                    <img src="../../app-store-logo.jpegapp-store-logo.jpeg" alt="app store" />
                </div>
            </div>
            <div className="footer-col-2">
                <img src="" alt="" />
                <p>More ways to shop: Find a retailer near you. Or call +91 - 0000000000</p>
            </div>
            <div className="footer-col-3">
                <h3>Usefull Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Join Affilate</li>
                </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">
            Copyright &copy; 2023 Spark Inc. | All Rights reserved.
        </p>
    </div>

);
export default Footer;