import { useEffect, useState } from "react"
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"
import placeholder from "../assets/placeholder.jpeg"
import { FaCalendarAlt, FaClock } from "react-icons/fa"

const Archives = () => {

    const { eventdetails, dispatch } = useEventDetailsContext()
    const { user } = useAuthContext()

    //states for delete
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const navigate = useNavigate()

    const handleBackBtn = () => {
        navigate('/dashboard')
    }

    
    useEffect(() => {

        const fetchEvents = async () => {
            const response = await fetch('/api/mainroutes/admin')
            const json = await response.json()

            if(response.ok){
                dispatch({
                    type: 'SET_EventDetails',
                    payload: json
                })
            }
        }

        fetchEvents()

    }, [dispatch])

    const handleDelete = async (id) => {
        //stop delete from opening new page
        //event.stopPropagation()
        if(!user){
            return
        }
        const response = await fetch('/api/mainroutes/' + id, {
            method: 'DELETE',
            //backend
            headers: {
                'Authorization' : `Bearer ${user.token}`
            }
        })
        if(!user){
            return
        }
        
        const json = await response.json()
        //now frontend
        if(response.ok){
            dispatch({type: 'DELETE_EventDetails', payload: json})
            setShowDeleteModal(false)
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
        setShowDeleteModal(false)
        setSelectedEvent(null)
    }
}

//for empty state
const archivedEvents =
    eventdetails?.filter(event => event.status === "archived") || [];

    return(

        <>
        <button
            className="back-btn"
            onClick={handleBackBtn}
        >
            ← Back
        </button>
        
            <h1>Archived Events</h1>

            <div className="dash-container">

    {archivedEvents.length === 0 ? (

        <div className="empty-state">
            <div className="empty-icon">📦</div>

            <h2>No Archived Events</h2>

            <p>
                Archived events will appear here once you archive them from the dashboard.
            </p>

            <button
                className="empty-btn"
                onClick={() => navigate("/dashboard")}
            >
                Back to Dashboard
            </button>
        </div>

    ) : (

        archivedEvents.map(eventdetail => (

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

                                <h2>{eventdetail.event_name}</h2>

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
                            <button onClick={(event) => {
                                event.stopPropagation()
                                setSelectedEvent(eventdetail)
                                setShowDeleteModal(true)
                            }}>
                       Permanantly Delete
                    </button>

                   <button
                                onClick={(e) => handleRestore(e, eventdetail._id, "draft")}
                            >
                                Restore as Draft
                            </button>

                            <button
                                onClick={(e) => handleRestore(e, eventdetail._id, "published")}
                            >
                                Publish
                            </button>
                            </div>
        
                        ))
                    )}
    
            </div>
            {showDeleteModal && (
    <div className="modal-overlay">

        <div className="delete-modal">

            <h2>Delete Event?</h2>

            <p>
                Are you sure you want to delete
                <strong> {selectedEvent?.event_name}</strong>?
            </p>

            <div className="modal-buttons">

                <button
                    className="cancel-btn"
                    onClick={() => {
                        setShowDeleteModal(false)
                        setSelectedEvent(null)
                    }}
                >
                    Cancel
                </button>

                <button
                    className="delete-btn"
                    onClick={() => handleDelete(selectedEvent._id)}
                >
                    Yes, Delete
                </button>

            </div>

        </div>

    </div>
)}

        </>

    )
}

export default Archives