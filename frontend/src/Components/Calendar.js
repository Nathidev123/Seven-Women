import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import "./EventsCalendar.css";

const EventsCalendar = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {

        const fetchEvents = async () => {

            const response = await fetch("/api/mainroutes/");
            const json = await response.json();

            if(response.ok){
                setEvents(json);
            }

        }

        fetchEvents();

    }, []);

    const calendarEvents = events.map(event => ({

        title: event.event_name,

        start: `${event.event_date.split("T")[0]}T${event.start_time}`,

        end: `${event.event_date.split("T")[0]}T${event.end_time}`,

        extendedProps: {
            organizer: event.organizer,
            email: event.contact_email,
            event: event.event_name,
            location: event.location,
            description: event.event_description,
            dress_code: event.dress_code
        }

    }));

    return (

        <div className="calendar-wrapper">

            <FullCalendar

                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin
                ]}

                initialView="dayGridMonth"

                headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}

                events={calendarEvents}

                height="500px"

                selectable

                eventClick={(info) => {

                alert(
                `${info.event.title}
                Organizer: ${info.event.extendedProps.organizer}
                Email: ${info.event.extendedProps.email}
                Event: ${info.event.extendedProps.event}
                Dress Code: ${info.event.extendedProps.dress_code}
                📍${info.event.extendedProps.location}`
                    );

                }}

            />

        </div>

    );

}

export default EventsCalendar;