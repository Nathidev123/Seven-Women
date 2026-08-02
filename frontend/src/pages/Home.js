import EventCards from "../Components/eventCards"
import  BeliefCards from "../Components/BeliefCards"
import MemberCards from "../Components/MemberCards"
import VisionMission from "../Components/VisionMission"
import OpinionPiece from "../Components/OpinionPiece"
import EnyobeniInitiative from '../Components/EnyobeniInitiative'
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
import EventsCalendar from "../Components/Calendar"
import GetInvolvedComponent from "../Components/GetInvolvedComponent"
import WhatWeDo from "../Components/WhatWeDo"
import { useEffect } from "react"
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Home = () => {
    //const API_URL = process.env.REACT_APP_API_URL;
    const sliderRef = useRef(null)

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        })
    }

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        })
    }

    const { eventdetails, dispatch } = useEventDetailsContext()

    useEffect(() => {
        const fetchEventDetails = async () => {
            //const response = await fetch(`${API_URL}/api/mainroutes/`)
            const response = await fetch('/api/mainroutes/')
            const json = await response.json()

            console.log(response.status)
            console.log(json)
            if(response.ok){
                dispatch({type: 'SET_EventDetails', payload: json})
            }
        }
        fetchEventDetails()
    }, [dispatch])//render once
    //, API_URL WAS IN dependancy array above
    return(
        <>
       
        <section className="hero-section">   
         {/*<h1>Eight Women. One Vision. A Future South Africa Built On Peace.</h1>*/}
        {/* MEMBERS */}
 
    {/*<div className="half-section">
    <section id="members" className="members-section">*/}

        <h1 className="meet-members"></h1>

        {/* Member Cards */}
        <MemberCards />
        
    </section>
       {/*</div> 
        {/* this to open a section on the same page */}
        
        {/*</section>*/}
        
        <section className="initiative-section">
            <EnyobeniInitiative />
        </section>
        
        <section id="about" className="who-section">
        
        <BeliefCards />

        </section>
        

        {/* Events */}
          <section id="events" className="events-section">

        <div className="events-header">

            

        </div>

        <div className="events-layout">

            {/* Calendar */}

            <div id="calendar" className="calendar">

                
                <EventsCalendar />
            </div>

            {/* Event Cards */}

        <div className="events-area">

        <div className="events-wrapper">

    {eventdetails?.length > 0 && (
        <button
            className="arrow-left"
            onClick={scrollLeft}
        >
            <FaChevronLeft />
        </button>
    )}

    <div
        ref={sliderRef}
        className="event-cards-container"
    >
            

                {eventdetails && eventdetails.length > 0 ? (

    eventdetails.map((eventdetail) => (
        <EventCards
            key={eventdetail._id}
            eventdetail={eventdetail}
        />
    ))

) : (

    <div className="events-empty-state">

        <div className="events-empty-icon">📅</div>

        <h2>No Upcoming Events</h2>

        <p>
            We're currently planning our next community gathering.
            Check back soon for new events and opportunities to get involved.
        </p>

    </div>

)}

                 </div>

              <button
                  className="arrow-right"
                  onClick={scrollRight}
                    >
                  <FaChevronRight />
                 </button>

             </div>

        </div>

        </div>

    </section>

    

    {/* MISSION */}

    <section className="mission-section">

        
        <VisionMission />
    </section>

    {/* WhatWeDo */}
        <section id="what-we-do">
        <div className="what-we-do-div">
        <WhatWeDo  />
        </div>
        </section>

    
    <section className="opinion-piece-section">
       
        <OpinionPiece />
    </section>
    <GetInvolvedComponent />
        </>
    )
}

        
       /*<p>A collective of seven women committed to fostering peace, justice and unity
                 by transforming community challenges into opportunities for dialogue, healing and lasting change.</p>*/
export default Home