import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.jpeg";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEventDetailsContext } from "../hooks/useEventDetailsContext";
import {
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt,
    FaUsers,
    FaEnvelope,
    FaPhone,
    FaUserTie,
    FaTshirt,
    FaBullseye,
    FaBullhorn
} from "react-icons/fa";
const AdminEventPage = () => {
const { id } = useParams()
const navigate = useNavigate()

    const { user } = useAuthContext()
    const { dispatch } = useEventDetailsContext()
    const [event, setEvent] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

     useEffect(() => {
        const getEventDetails = async () => {
        const response = await fetch(`/api/mainroutes/${id}`)
        const json = await response.json()

        if(response.ok){
            setEvent(json)
            console.log(json)
        }
    }
    getEventDetails()
     }, [id])




     const handleUpdate = async (event, id) => {
    if(!user) return

    const data = new FormData()
        
    Object.keys(event).forEach(key => {
        if(key !== "imageFile"){
            data.append(key, event[key])
        }
    })

    if(event.imageFile){
        data.append("image", event.imageFile)
    }

    const response = await fetch('/api/mainroutes/' + id,{
        method: "PATCH",
        headers:{
            Authorization: `Bearer ${user.token}`
        },
        body: data
    })

    const json = await response.json()

    if(response.ok){
        setEvent(json)
        setIsEditing(false)
        dispatch({
            type:"PATCH_EventDetails",
            payload:json
        })
    }
}

    if(!event){
        return(
            <div className="loading-page">

            </div>
        )
    }

    return(
        <>
        <main className="event-page">
        
                    {/* HERO */}
                    <button
                        className="back-btn"
                        onClick={() => navigate(-1)}
                    >
                        ← Back
                    </button>
                    <section className="event-hero">
        
                        <div className="event-hero-content">
        
                            <span className="section-tag">
                                Community Event
                            </span>
        
            {
                isEditing ? (
                    <input
                        type="text"
                        value={event.event_name}
                        onChange={(e) =>
                            setEvent({
                                ...event,
                                event_name: e.target.value
                            })
                        }
                    />
                ) : (
                    <h1>{event.event_name}</h1>
                )
            }
                                        <button
            onClick={async () => {

                if(isEditing){
                    await handleUpdate(event,event._id)
                }else{
                    setIsEditing(true)
                }

            }}
            >
                {isEditing ? "Save Changes" : "Edit"}
            </button>
        
                            {
    isEditing
    ? (
        <textarea
            value={event.event_description}
            onChange={(e) =>
                setEvent({
                    ...event,
                    event_description: e.target.value
                })
            }
        />
    )
    : (
        <p>{event.event_description}</p>
    )
}
        
                        </div>
        
                        <div className="event-hero-image">
                    {isEditing && (
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setEvent({
                            ...event,
                            imageFile: e.target.files[0]
                            //not replacing image
                            //now -> imageFile
                        })
                    }
                />
            )}
        
                        </div>
        
                    </section>
                     <section>
                        {/*To display map*/}
                        <div className="map-container">
                {
    isEditing
    ? (
        <input
            value={event.location}
            onChange={(e) =>
                setEvent({
                    ...event,
                    location: e.target.value
                })
            }
        />
    )
    : (
        <p>{event.location}</p>
    )
}
                        <iframe className="displayMap"
                        title="Event Location"
                        width="65%"
                        height="200"
                        style={{ border: 0}}
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(event.location)}`}>
                        
                        </iframe>
                        </div>
                    </section>
                    
                    {/* QUICK INFO */}
        
                    <section className="event-info-grid">
        
                        <div className="info-card">
        
                            <FaCalendarAlt />
        
                            <div>

    <h4>Date</h4>

    {
        isEditing ? (
            <input
    type="date"
    value={event.event_date?.split("T")[0]}
    onChange={(e) =>
        setEvent({
            ...event,
            event_date: e.target.value
        })
    }
/>
        ) : (
            <p>
                {new Date(event.event_date).toLocaleDateString(
                    "en-ZA",
                    {
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    }
                )}
            </p>
        )
    }

</div>
        
                        </div>
        
                        <div className="info-card">
        
                            <FaClock />
        
                           <div>

    <h4>Starts</h4>

    {
        isEditing ? (
            <input
                type="time"
                value={event.start_time}
                onChange={(e) =>
                    setEvent({
                        ...event,
                        start_time: e.target.value
                    })
                }
            />
        ) : (
            <p>
                {new Date(`1970-01-01T${event.start_time}`)
                    .toLocaleTimeString("en-ZA", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    })}
            </p>
        )
    }

</div>
        
                        </div>
        
                        <div className="info-card">
        
                            <FaClock />
        
                            <div>

    <h4>Ends</h4>

    {
        isEditing ? (
            <input
                type="time"
                value={event.end_time}
                onChange={(e) =>
                    setEvent({
                        ...event,
                        end_time: e.target.value
                    })
                }
            />
        ) : (
            <p>
                {new Date(`1970-01-01T${event.end_time}`)
                    .toLocaleTimeString("en-ZA", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true
                    })}
            </p>
        )
    }

</div>
        
                        </div>
        
                        <div className="info-card">
        
                            <FaUsers />
        
                            <div>

    <h4>Capacity</h4>

    {
        isEditing ? (
            <input
                type="number"
                min="1"
                value={event.capacity}
                onChange={(e) =>
                    setEvent({
                        ...event,
                        capacity: e.target.value
                    })
                }
            />
        ) : (
            <p>{event.capacity} attendees</p>
        )
    }

</div>
        
                        </div>
        
                    </section>
        
                    {/* ABOUT */}
        
                    <section className="event-section">
        
                       <h2>About This Event</h2>

{
    isEditing ? (
        <textarea
            value={event.event_description}
            onChange={(e) =>
                setEvent({
                    ...event,
                    event_description: e.target.value
                })
            }
            rows={6}
        />
    ) : (
        <p>{event.event_description}</p>
    )
}
        
                    </section>
                   
                    
        
                    {/* EVENT DETAILS */}
        
                    <section className="event-grid">
        
                        <div className="detail-card">
        
                            <FaUserTie />
        
                           <h3>Organizer</h3>

{
    isEditing ? (
        <input
            type="text"
            value={event.organizer}
            onChange={(e) =>
                setEvent({
                    ...event,
                    organizer: e.target.value
                })
            }
        />
    ) : (
        <p>{event.organizer}</p>
    )
}
        
                        </div>
        
                        <div className="detail-card">
        
                            <FaMapMarkerAlt />
        
                            <h3>Location</h3>

{
    isEditing ? (
        <input
            type="text"
            value={event.location}
            onChange={(e) =>
                setEvent({
                    ...event,
                    location: e.target.value
                })
            }
        />
    ) : (
        <p>{event.location}</p>
    )
}
        
                        </div>
        
                        <div className="detail-card">
                        <FaBullseye />
                            <h3>Purpose</h3>

{
    isEditing ? (
        <textarea
            value={event.purpose}
            onChange={(e) =>
                setEvent({
                    ...event,
                    purpose: e.target.value
                })
            }
            rows={4}
        />
    ) : (
        <p>{event.purpose}</p>
    )
}
        
                        </div>
        
                        <div className="detail-card">
                            <FaBullhorn />
                            <h3>Audience</h3>

{
    isEditing ? (
        <input
            type="text"
            value={
                Array.isArray(event.audience)
                    ? event.audience.join(", ")
                    : event.audience
            }
            onChange={(e) =>
                setEvent({
                    ...event,
                    audience: e.target.value
                        .split(",")
                        .map(item => item.trim())
                })
            }
        />
    ) : (
        <p>
            {Array.isArray(event.audience)
                ? event.audience.join(", ")
                : event.audience}
        </p>
    )
}
        
                        </div>
        
                        <div className="detail-card">
                            <FaTshirt />
                            <h3>Dress Code</h3>

{
    isEditing ? (
        <input
            type="text"
            value={event.dress_code}
            onChange={(e) =>
                setEvent({
                    ...event,
                    dress_code: e.target.value
                })
            }
        />
    ) : (
        <p>{event.dress_code}</p>
    )
}
        
                        </div>
        
                    </section>
        
                    {/* CONTACT */}
        
                    <section className="event-contact">
        
                        <h2>
                            Contact Information
                        </h2>
        
                        <div className="contact-card">

    <FaEnvelope />

    {
        isEditing ? (
            <input
                type="email"
                value={event.contact_email}
                onChange={(e) =>
                    setEvent({
                        ...event,
                        contact_email: e.target.value
                    })
                }
            />
        ) : (
            <span>{event.contact_email}</span>
        )
    }

</div>
        
                        <div className="contact-card">

    <FaPhone />

    {
        isEditing ? (
            <input
                type="tel"
                value={event.contact_phone}
                onChange={(e) =>
                    setEvent({
                        ...event,
                        contact_phone: e.target.value
                    })
                }
            />
        ) : (
            <span>{event.contact_phone}</span>
        )
    }

</div>
        
                        {
    event.meeting_link && (
        <div className="contact-card">

            <strong>Online Meeting</strong>

            {
                isEditing ? (
                    <input
                        type="url"
                        value={event.meeting_link}
                        onChange={(e) =>
                            setEvent({
                                ...event,
                                meeting_link: e.target.value
                            })
                        }
                    />
                ) : (
                    <a
                        href={event.meeting_link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join Event
                    </a>
                )
            }

        </div>
    )
}
        
                    </section>
        
                </main>
        </>
    )
}


export default AdminEventPage