import { createContext, useReducer } from 'react'
export const eventFormContext = createContext()

 const initialState = {
    formData: {
        organizer: "",
        contact_phone: "",
        contact_email: "",
        event_name: "",
        event_description: "",
        location: "",

        event_format: "",
        meeting_link: "",
        purpose: "",
        audience: "",
        image: null,

        event_date: "",
        start_time: "",
        end_time: "",
        capacity: "",
        dress_code: ""
        
    }
}
//handling the flow of data for all forms
//monitoring the changes in the event user is filling in
export const eventFormReducer = (state, action) => {
    switch (action.type) {

        case "UPDATE_FIELD":
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value
                }
            }

        case "RESET_FORM":
            return initialState

        default:
            return state
    }
}
  
    
export const EventFormContextProvider = ({ children }) => {
   
    const [state, dispatch2] = useReducer(eventFormReducer, initialState)
    

    return (
        <eventFormContext.Provider value={{ ...state, dispatch2 }}>
            {children}
        </eventFormContext.Provider>
    )
}