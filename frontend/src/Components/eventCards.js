import { useNavigate } from "react-router-dom"
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import profilePic from '../assets/placeholder.jpeg'
const EventCards = ({ eventdetail }) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate()
    
    console.log(eventdetail.image);

    return(
        <>
        <div className="event-card"
        onClick={() => navigate(`/eventPage/${eventdetail._id}`)}>
        <img
    src={eventdetail.image || profilePic}
    alt={eventdetail.event_name}
    className="event-image"
/>
        <h1>{eventdetail.event_name}</h1>
        <p>{eventdetail.location}</p>
        
        <p>
            <FaCalendarAlt />{" "}
            {new Date(eventdetail.event_date).toLocaleDateString("en-ZA", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })}
        </p>

        <p>
            <FaClock />{" "}
            {new Date(`1970-01-01T${eventdetail.start_time}`)
                .toLocaleTimeString("en-ZA", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                })}
        </p>
        

        </div>
        </>
    )
}



export default EventCards