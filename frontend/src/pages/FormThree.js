import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEventFormContext } from "../hooks/useEventFormContext"
const FormThree = () => {
const [emptyFields, setEmptyFields] = useState([])
const [error, setError] = useState(null)
const { formData, dispatch2 } = useEventFormContext()
const navigate = useNavigate()

    /*const [eventDetails, setEventDetails] = useState({
        start_time: '',
        end_time: '',
        registration_deadline: '',
        capacity: ''
    })
    
    const handleChange = (e) => {
        setEventDetails({:
            ...eventDetails,
            [e.target.name]: e.target.value
        })
        
    }*/
    const handleChange = (e) => {
        dispatch2({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value
        })
    }
    const handleSubmit = () => {
        
        navigate('/formFour')
    }
    const handleBackBtn = () => {
        navigate('/formTwo')
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
                <span className="step">Step 3 of 4</span>

                <h1>
                    Schedule your event.
                </h1>

                <p>
                    Choose the date and specify the start and end times so attendees know exactly when your event will take place.
                </p>
            </div>

            <input
                type="date"
                onChange={handleChange}
                name="event_date"
                value={formData.event_date}
                className={emptyFields.includes('event_date') ? 'error' : ''}
            />
            <br />

            <label>Starts At </label>
            <input
                
                type="time"
                placeholder="start time"
                onChange={handleChange}
                name="start_time"
                value={formData.start_time}
                className={emptyFields.includes('start_time') ? 'error' : ''}
            />
            <br />

            <label>Ends At </label>
            <input
                type="time"
                onChange={handleChange}
                name="end_time"
                placeholder="end time"
                value={formData.end_time}
                className={emptyFields.includes('end_time') ? 'error' : ''}
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

export default FormThree