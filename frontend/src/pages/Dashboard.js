import { useEffect, useState } from "react"
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
import { useAuthContext } from "../hooks/useAuthContext";
import { FaCalendarAlt, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import placeholder from '../assets/placeholder.jpeg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
    const navigate = useNavigate()
    //needs to display all events created
    //update and delete functionality
    //setEventDetails

    const { eventdetails, dispatch } = useEventDetailsContext()
    const { user } = useAuthContext()
    const [menuOpen, setMenuOpen] = useState(false)
    
    useEffect(() => {
        const fetchEventDetails = async () => {
            const response = await fetch('/api/mainroutes/admin')
            const json = await response.json()

            console.log(response.status)
            console.log(json)
            if(response.ok){
                dispatch({type: 'SET_EventDetails', payload: json})
            }
            
        }

        fetchEventDetails()
    }, [ dispatch ])
    //eventdetails will use when displaying 
    console.log(eventdetails)

    


    /*archive functionality*/
    const handleArchive = async (event, id) => {
            event.stopPropagation()

            if(!user){
                return
            }
            const response = await fetch('/api/mainroutes/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    status: 'archived'
                })
            })

            const json = await response.json()
            if(response.ok){
                dispatch({
                    type: 'PATCH_EventDetails',
                     payload: json
                })
            }
        }
        
        const handleRestore = async (event, id, status) => {
    event.stopPropagation()

    const response = await fetch('/api/mainroutes/' + id, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify({
            status
        })
    })

    const json = await response.json()

    if(response.ok){
        dispatch({
            type: 'PATCH_EventDetails',
            payload: json
        })
    }
}
    
    return(
        <>
        <button
                    className="hamburger1"
                    onClick={() => setMenuOpen(true)}
                >

                    <FaBars />

                </button>
        
        
        
        
        <div className={`sidebar1 ${menuOpen ? "active" : ""}`}>
        
                        <button
                            className="close-btn"
                            onClick={() => setMenuOpen(false)}
                        >
        
                            <FaTimes />
        
                        </button>
                    <div className="sidebar-links">

                    
                    <Link onClick={() => setMenuOpen(false)} to="/dashboard">Dashboard</Link>

                    <Link onClick={() => setMenuOpen(false)} to="/archives">Archives</Link>

                    <Link onClick={() => setMenuOpen(false)} to="/formOne">Create Event</Link>
                    </div>
        </div>

        {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <h1>Dashboard</h1>
        
        
        <div className="dash-container"
       >
        {eventdetails &&
    eventdetails
        .filter(event => event.status !== "archived")
        .map((eventdetail) => {
            return (
                <div
                    key={eventdetail._id}
                    className="event-card"
                    onClick={() => navigate(`/adminevent/${eventdetail._id}`)}
                >
                    <img
                        src={eventdetail.image || placeholder}
                        alt={eventdetail.event_name}
                        className="event-display"
                    />
                    {/*  marker for the state of event  */}

                    <span className={`status-badge ${eventdetail.status}`}>
                    {eventdetail.status.charAt(0).toUpperCase() + eventdetail.status.slice(1)}
                        </span>

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

                

                    <button onClick={(event) => handleArchive(event, eventdetail._id)}>
                        <MdOutlineArchive />

                    </button>

                    {eventdetail.status === "draft" && (
    <button
        onClick={(e) => handleRestore(e, eventdetail._id, "published")}
    >
        Publish
    </button>
)}
                </div>
            );
        })}
        </div>
        </>
    )
}


export default Dashboard