import "./Footer.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate()
    const { user } = useAuthContext()
    const year = new Date().getFullYear();

    const handleAdmin = () => {
        if(!user){
            navigate('/login')
        }
        else{
            navigate('/dashboard')
        }
        
    }
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
                    <a href="/our-work">What We Do</a>
                    <a href="/peace-initiative">Enyobeni Initiative</a>

                </div>

                <div className="footer-section">

                    <h3>Community</h3>

                    <a href="/get-involved">Get Involved</a>

                    <button onClick={handleAdmin}>Admin</button>

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
/* <a { `${user} ? '/dashboard' : '/#admin'`}>Admin</a>*/