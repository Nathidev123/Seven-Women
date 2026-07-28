import { useEffect, useState } from "react"
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
import { useAuthContext } from "../hooks/useAuthContext";
import { FaCalendarAlt, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineArchive, MdOutlineSort } from "react-icons/md";
import placeholder from '../assets/placeholder.jpeg'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Dashboard.css'
import {
    FaCheckCircle,
    FaEdit,
    FaArchive,
    FaRocket
} from "react-icons/fa";
const Dashboard = () => {
    const navigate = useNavigate()
    //needs to display all events created
    //update and delete functionality
    //setEventDetails

    const { eventdetails, dispatch } = useEventDetailsContext()
    const { user } = useAuthContext()
    const [menuOpen, setMenuOpen] = useState(false)
    const [sortOrder, setSortOrder] = useState('newest')
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

/*Statistics logic*/
    const totalEvents = eventdetails?.length || 0

const publishedEvents =
    eventdetails?.filter(event => event.status === "published").length || 0

const draftEvents =
    eventdetails?.filter(event => event.status === "draft").length || 0

const archivedEvents =
    eventdetails?.filter(event => event.status === "archived").length || 0

const upcomingEvents =
    eventdetails?.filter(event =>
        new Date(event.event_date) >= new Date() &&
        event.status !== "archived"
    ).length || 0
    
    //Greeting
    const hour = new Date().getHours()

        let greeting = "Good Evening"

        if (hour < 12) {
            greeting = "Good Morning"
        } else if (hour < 18) {
            greeting = "Good Afternoon"
        }


        //empty states
        const activeEvents =
    eventdetails?.filter(event => event.status !== "archived") || [];

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
            <div className="dashboard-header">
                
                <h1>{greeting} {user?.name}</h1>
                <p>
            You have <strong>{upcomingEvents}</strong> upcoming events,
            <strong> {draftEvents}</strong> drafts waiting to be published,
            and <strong>{publishedEvents}</strong> published events.
        </p>
            </div>

            

        
        <section className="statistics">

    <div className="statcard total">
        <div className="stat-icon">
            <FaCalendarAlt />
        </div>

        <div>
            <span>Total Events</span>
            <h2>{totalEvents}</h2>
        </div>
    </div>

    <div className="statcard published">
        <div className="stat-icon">
            <FaCheckCircle />
        </div>

        <div>
            <span>Published</span>
            <h2>{publishedEvents}</h2>
        </div>
    </div>

    <div className="statcard draft">
        <div className="stat-icon">
            <FaEdit />
        </div>

        <div>
            <span>Drafts</span>
            <h2>{draftEvents}</h2>
        </div>
    </div>

    <div className="statcard archived">
        <div className="stat-icon">
            <FaArchive />
        </div>

        <div>
            <span>Archived</span>
            <h2>{archivedEvents}</h2>
        </div>
    </div>

    <div className="statcard upcoming">
        <div className="stat-icon">
            <FaRocket />
        </div>

        <div>
            <span>Upcoming</span>
            <h2>{upcomingEvents}</h2>
        </div>
    </div>
            
</section>

           <div className="dashboard-actions">
    <button
        className="sort-btn"
        onClick={() =>
            setSortOrder(prev =>
                prev === "newest" ? "oldest" : "newest"
            )
        }
    >
        <MdOutlineSort />

        {sortOrder === "newest"
            ? "Newest First"
            : "Oldest First"}
    </button>
</div>    
        <div className="dash-container"
       >
        
    {activeEvents.length === 0 ? (

    <div className="empty-state">

        <div className="empty-icon">
            <FaCalendarAlt />
        </div>

        <h2>No Events Yet</h2>

        <p>
             You haven't created any events yet.
    Start by creating your first community event.
        </p>

        <button
            className="empty-btn"
            onClick={() => navigate("/formOne")}
        >
            + Create First Event
        </button>

    </div>

) : (

    [...activeEvents]
        .sort((a, b) => {
            const dateA = new Date(a.event_date)
            const dateB = new Date(b.event_date)

            return sortOrder === "newest"
                ? dateB - dateA
                : dateA - dateB
        })
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
        })
    )}
        </div>
        </>
    )}


export default Dashboard