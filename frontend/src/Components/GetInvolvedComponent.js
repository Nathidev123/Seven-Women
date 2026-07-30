import './InvolvedComponent.css'
import { useNavigate } from "react-router-dom"
const GetInvolvedComponent = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/get-involved')
    }
    return(<>
            <section className="contact-us">
            <div className="contact">
            <h1>Be Part of the Change</h1>
            <p>Every voice has the power to shape a more just, peaceful,
                 and inclusive South Africa. Join us in building communities 
                 where dignity, equality, and opportunity are realities for all.</p>

            <button onClick={handleClick}>Get Involved</button>
            </div>
            </section>
            </>)
}


export default GetInvolvedComponent