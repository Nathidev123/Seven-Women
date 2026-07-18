import { eventFormContext } from "../context/eventFormContext";
import { useContext } from "react";

export const useEventFormContext = () => {
    const context = useContext(eventFormContext)

    if(!context){
        throw Error('useEventFormContext must be used inside a EventFormContextProvider')
    }
    return context
}