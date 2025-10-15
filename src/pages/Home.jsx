import { Link } from "react-router-dom";
import javaImage from "../assets/javacommunity.png";
import "./Home.css"; // create a separate CSS file for better styling

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to <span>JavaConnect</span></h1>
                    <p>
                        A friendly platform for Java developers to ask questions, share knowledge,
                        and grow together as a global coding community.
                    </p>
                    <Link to="/questions" className="explore-btn">
                        🚀 Explore Questions
                    </Link>
                </div>

                <div className="hero-image">
                    <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
                        alt="Java Logo"
                    />
                </div>
            </section>

            {/* Community Section */}
            <section className="community-section">
                {/* Image */}
                <div className="community-image">
                    <img src={javaImage} alt="Developer Community" />
                </div>

                {/* Content */}
                <div className="community-content">
                    <h2>👥 Join Our Developer Community</h2>
                    <p>
                        Learn, contribute, and collaborate with other passionate Java developers.
                        Whether you're a beginner or an expert, there's always something new to discover.
                    </p>
                    <Link to="/register" className="join-btn">
                        Join Now
                    </Link>
                </div>
            </section>
        </div>
    );
}
