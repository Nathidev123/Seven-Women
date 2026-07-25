import { useEffect } from "react"
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
const Dashboard = () => {

    //needs to display all events created
    //update and delete functionality
    //setEventDetails

    const { eventdetails, dispatch } = useEventDetailsContext()
    
    useEffect(() => {
        const fetchEventDetails = async () => {
            const response = await fetch('/api/mainroutes/')
            const json = await response.json()

            if(response.ok){
                dispatch({action: 'SET_EventDetails', payload: json})
            }
            
        }

        fetchEventDetails()
    }, [ dispatch ])
    //eventdetails will use when displaying 

    return(
        <>
        <div className="dash-container">
        <h1>Eight Women Dashboard</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
        </>
    )
}


export default Dashboard