import { createContext, useReducer } from "react";

export const eventContext = createContext()

export const eventsReducer = (state, action) => {
    switch(action.type){
        case 'SET_EventDetails': 
        return{
            eventdetails: action.payload
        }
        case 'CREATE_EventDetails': 
        return{
            eventdetails: [action.payload, ...state.eventdetails]
        }
        case 'DELETE_EventDetails':
            return{
                eventdetails: state.eventdetails.filter((currentEvent) => currentEvent._id !== action.payload._id)
        }
        case 'PATCH_EventDetails':
            return{
                eventdetails: state.eventdetails.map(currentEvent => {
                    return currentEvent._id === action.payload._id ? 
                    action.payload: currentEvent
                })
            }
            default: return state
    }
}
export const EventDetailsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eventsReducer, {
        eventdetails: []
        //so eventDetails becomes state
    })
    return(
        <eventContext.Provider value = {{...state, dispatch}} >
            { children }
        </eventContext.Provider>
    )
}