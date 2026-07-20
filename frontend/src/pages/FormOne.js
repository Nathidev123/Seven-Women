import { useNavigate } from "react-router-dom"
import { useEventFormContext } from "../hooks/useEventFormContext"
import { useState } from "react"

const FormOne = () => {
    const [emptyFields] = useState([])
    const { formData, dispatch2 } = useEventFormContext()

const navigate = useNavigate() 
    
        

        const handleChange = (e) => {

        dispatch2({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value
        })

}

    const handleSubmit = () => {
        
         navigate('/formTwo') 
    }
    const handleBackBtn = () => {
        navigate('/')
    }
    return(
        <div className="event-form-page">

    <div className="event-form-card">

        <button
            className="back-btn"
            onClick={handleBackBtn}
        >
            ← Back
        </button>

        <form>

            <div className="form-header">
                <span className="step">Step 1 of 4</span>

                <h1>
                    Let's start with the organizer and event details.
                </h1>

                <p>
                    This information helps attendees understand what your event is about.
                </p>
            </div>

            <input
                placeholder="Organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className={emptyFields.includes('organizer') ? 'error' : ''}
            />
            <br />

            <input
                placeholder="Email"
                type="email"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                className={emptyFields.includes('contact_email') ? 'error' : ''}
            />
            <br />

            <input
                placeholder="Phone Number"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                className={emptyFields.includes('contact_phone') ? 'error' : ''}
            />
            <br />

            <input
                placeholder="Event Name"
                name="event_name"
                value={formData.event_name}
                onChange={handleChange}
                className={emptyFields.includes('event_name') ? 'error' : ''}
            />
            <br />

            <textarea
                placeholder="Description"
                name="event_description"
                value={formData.event_description}
                onChange={handleChange}
                className={emptyFields.includes('event_description') ? 'error' : ''}
                rows={5}
            />
            <br />

            <input
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={emptyFields.includes('location') ? 'error' : ''}
            />
            <br />

        </form>

        <button
            className="form-btn"
            onClick={handleSubmit}
        >
            Next →
        </button>

    </div>

</div>
    )
}

export default FormOne