import { Link } from "react-router-dom";
import image from "../assets/images/page-not-found.webp";
import "../css/NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <div className="main-image">
                <img src={image} alt="Page Not Found" />
            </div>
            <div className="main-content">
                <h1>404</h1>
                <h2>Oh! You're lost.</h2>
                <p>
                    The page you are looking for does not exist. How you got here is a mystery. <br />
                    But you can click the button below to go back to the homepage.
                </p>

                <Link to="/" className="main-link">Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
