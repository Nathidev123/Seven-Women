import "./Footer.css";

const Footer = () => {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <div className="footer-content">

                <div className="footer-brand">

                    <h2>Community Meet</h2>

                    <p>
                        Connecting communities through events, dialogue,
                        collaboration and meaningful participation.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Explore</h3>

                    <a href="/">Home</a>
                    <a href="/#events">Events</a>
                    <a href="/#calendar">Calendar</a>

                </div>

                <div className="footer-section">

                    <h3>Community</h3>

                    <a href="/#about">About</a>
                    
                    <a href="/login">Admin</a>

                    <a href="/get-involved">Get Involved</a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © {year} Community Meet • Built for stronger communities.
                </p>

            </div>

        </footer>

    );

}

export default Footer;
/*<a href="/contact">Contact</a>*/