import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder.jpeg";
import './EventPage.css'
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

const EventPage = () => {
    //const API_URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const navigate = useNavigate();

    const [event, setEvent] = useState(null);

    useEffect(() => {

        const fetchEventDetails = async () => {
            //const response = await fetch(`${API_URL}/api/mainroutes/${id}`)
            const response = await fetch(`/api/mainroutes/${id}`);
            const json = await response.json();

            if (response.ok) {
                setEvent(json);
                console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
            }

        };

        fetchEventDetails();

    }, [id]);
    //API_URL this was in the dependency array
    if (!event) {
        return (
            <div className="loading-page">
               
            </div>
        );
    }

    return (
        
        <main className="event-page">

            {/* HERO */}
            
            <section className="event-hero">

                <div className="event-hero-content">

                    <span className="section-tag">
                        Community Event
                    </span>

                    <h1>
                        {event.event_name}
                    </h1>

                    <p>
                        {event.event_description}
                    </p>

                </div>

                <div className="event-hero-image">

            <img
                src={event.image || placeholder}
                alt={event.event_name}
                className="event-page-image"
            />

                </div>

            </section>
             <section className="map-section">

    <div className="map-header">

        <div>
            <span className="section-tag">
                Event Location
            </span>

            <h2>Where we'll meet</h2>

            <p>{event.location}</p>
        </div>

    </div>

    <div className="map-container">

        <iframe
            className="displayMap"
            title="Event Location"
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(event.location)}`}
        />

    </div>

</section>
            
            {/* QUICK INFO */}

            <section className="event-info-grid">

                <div className="info-card">

                    <FaCalendarAlt />

                    <div>

                        <h4>Date</h4>

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

                    </div>

                </div>

                <div className="info-card">

                    <FaClock />

                    <div>

                        <h4>Starts</h4>

                        <p>
                            {new Date(`1970-01-01T${event.start_time}`)
                                .toLocaleTimeString("en-ZA", {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true
                                })}
                        </p>

                    </div>

                </div>

                <div className="info-card">

                    <FaClock />

                    <div>

                        <h4>Ends</h4>

                        <p>
                            {new Date(`1970-01-01T${event.end_time}`)
                                .toLocaleTimeString("en-ZA", {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true
                                })}
                        </p>

                    </div>

                </div>

                <div className="info-card">

                    <FaUsers />

                    <div>

                        <h4>Capacity</h4>

                        <p>{event.capacity} attendees</p>

                    </div>

                </div>

            </section>

            
           
            

            {/* EVENT DETAILS */}

<section className="event-details-section">

    <h2>Event Details</h2>

    <div className="event-details-card">

        <div className="detail-row">

            <div className="detail-icon">
                <FaUserTie />
            </div>

            <div className="detail-content">
                <span>Organizer</span>
                <p>{event.organizer}</p>
            </div>

        </div>

        <div className="divider"></div>

        <div className="detail-row">

            <div className="detail-icon">
                <FaMapMarkerAlt />
            </div>

            <div className="detail-content">
                <span>Location</span>
                <p>{event.location}</p>
            </div>

        </div>

        <div className="divider"></div>

        <div className="detail-row">

            <div className="detail-icon">
                <FaBullseye />
            </div>

            <div className="detail-content">
                <span>Purpose</span>
                <p>{event.purpose}</p>
            </div>

        </div>

        <div className="divider"></div>

        <div className="detail-row">

            <div className="detail-icon">
                <FaBullhorn />
            </div>

            <div className="detail-content">
                <span>Audience</span>
                <p>
                    {Array.isArray(event.audience)
                        ? event.audience.join(", ")
                        : event.audience}
                </p>
            </div>

        </div>

        <div className="divider"></div>

        <div className="detail-row">

            <div className="detail-icon">
                <FaTshirt />
            </div>

            <div className="detail-content">
                <span>Dress Code</span>
                <p>{event.dress_code}</p>
            </div>

        </div>

    </div>

</section>

            {/* CONTACT */}

            <section className="event-contact">

                <h2>
                    Contact Information
                </h2>

                <div className="contact-card">

                    <FaEnvelope />

                    <span>
                        {event.contact_email}
                    </span>

                </div>

                <div className="contact-card">

                    <FaPhone />

                    <span>
                        {event.contact_phone}
                    </span>

                </div>

                {event.meeting_link && (

                    <div className="contact-card">

                        <strong>
                            Online Meeting
                        </strong>

                        <a
                            href={event.meeting_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Join Event
                        </a>

                    </div>

                )}

            </section>

        </main>

    );

};

export default EventPage;