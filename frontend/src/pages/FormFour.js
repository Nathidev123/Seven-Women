import { useNavigate } from "react-router-dom"
import { useState } from "react"
//import { useEventDetailsContext } from '../hooks/useEvenDetailsContext'
import { useEventFormContext } from "../hooks/useEventFormContext"
import { useAuthContext } from "../hooks/useAuthContext"

const FormFour = () => {
    //added this for deploying to vercel, to get the api url from the environment variable
    //we changing all the fetch requests to use this variable instead of the hardcoded url
    //this is done after deploying the backend to Render and the frontend to Vercel, so that 
    // the frontend can access the backend api url from the environment variable
    //const API_URL = process.env.REACT_APP_API_URL;
    console.log("API_URL:")
    //, API_URL was in the console.log above
    const { formData, dispatch2 } = useEventFormContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    /*const { dispatch } = useEventDetailsContext()
    const [eventDetails, setEventDetails] = useState({
        dress_code: '',
        pricing: ''
    })
*/  
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleChange = (e) => {

        dispatch2({
            type: "UPDATE_FIELD",
            field: e.target.name,
            value: e.target.value

        })
    }
    
    const handleSubmit = async (status) => {
        /*preventing unauthenticated users from submitting */
        if(!user){
            setError('You must be logged in')
            return
        }
        const data = new FormData()

        Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value)
        })

        data.append('status', status)

        for (const [key, value] of data.entries()) {
            console.log(key, value)
        }       

        
        //const response = await fetch(`${API_URL}/api/mainroutes/`
        const response = await fetch('/api/mainroutes/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${user.token}`
            },
            body: data
        })


        const json = await response.json()
        if(!response.ok){
            console.log(json.error)
            console.log(json)
            setError(json.error)
            setEmptyFields(json.emptyFields || [])
        }
        if(response.ok){
            dispatch2({type: 'RESET_FORM', payload: json})
            console.log('Successful', json)
            setError(null)
            setEmptyFields([])
            navigate('/dashboard')
        }
    }
    const handleBackBtn = () => {
        navigate('/formThree')
    }
    /*
    //should send all details to db
    //including other forms
    const handleSubmit = async () => {
        const response = await fetch('/api/mainroutes/', {
            method: 'POST',
            body: JSON.stringify(eventDetails),
            headers: {'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            console.log('Could not post to db')
        }
        if(response.ok){
            setEventDetails({
            event_name: '',
            event_description: '',
            location: '',
            category: '',
            image: '',
            start_time: '',
            end_time: '',
            registration_deadline: '',
            capacity: ''
            })
            console.log('Added to db', json)
            dispatch({type: 'SET_EventDetails', payload: json})
        }
    }
*/


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
                <span className="step">Step 4 of 4</span>

                <h1>
                    Lastly, capacity and dress code
                </h1>

                <p>
                    Finish setting up your event by specifying the dress code and ticket pricing.
                </p>
            </div>

            <input
                placeholder="Dress Code"
                onChange={handleChange}
                name="dress_code"
                value={formData.dress_code}
                className={emptyFields.includes('dress_code') ? 'error' : ''}
            />
            <br />

                        <div className="form-header form-section">
                <h2>Event Capacity</h2>

                <p>
                    Specify the maximum number of attendees allowed.
                </p>
            </div>

            <input
                type="number"
                placeholder="125"
                onChange={handleChange}
                name="capacity"
                value={formData.capacity}
                className={emptyFields.includes('capacity') ? 'error' : ''}
            />
            <br />

        </form>

        <button
            className="form-btn"
            onClick={() => handleSubmit('draft')}
        >
            Save Draft 
        </button>

        <button
            className="form-btn"
            onClick={() => handleSubmit('published')}
        >
            Publish ✓
        </button>

        {error && <div className="error-message">{error}</div>}

    </div>

</div>
    )
}

export default FormFour