import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    const API_URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();

    const [event, setEvent] = useState(null);

    useEffect(() => {

        const fetchEventDetails = async () => {

            const response = await fetch(`${API_URL}/api/mainroutes/${id}`);
            const json = await response.json();

            if (response.ok) {
                setEvent(json);
            }

        };

        fetchEventDetails();

    }, [id, API_URL]);

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
                        src={`/uploads/${event.image}`}
                        alt={event.event_name}
                        className="event-page-image"
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

            {/* ABOUT */}

            <section className="event-section">

                <h2>
                    About This Event
                </h2>

                <p>
                    {event.event_description}
                </p>

            </section>

            {/* EVENT DETAILS */}

            <section className="event-grid">

                <div className="detail-card">

                    <FaUserTie />

                    <h3>Organizer</h3>

                    <p>
                        {event.organizer}
                    </p>

                </div>

                <div className="detail-card">

                    <FaMapMarkerAlt />

                    <h3>Location</h3>

                    <p>
                        {event.location}
                    </p>

                </div>

                <div className="detail-card">
                <FaBullseye />
                    <h3>
                        Purpose
                    </h3>

                    <p>
                        {event.purpose}
                    </p>

                </div>

                <div className="detail-card">
                    <FaBullhorn />
                    <h3>
                        Audience
                    </h3>

                    <p>
                        {Array.isArray(event.audience)
                            ? event.audience.join(", ")
                            : event.audience}
                    </p>

                </div>

                <div className="detail-card">
                    <FaTshirt />
                    <h3>
                        Dress Code
                    </h3>

                    <p>
                        {event.dress_code}
                    </p>

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