import EventCards from "../Components/eventCards"
import  BeliefCards from "../Components/BeliefCards"
import MemberCards from "../Components/MemberCards"
import VisionMission from "../Components/VisionMission"
import OpinionPiece from "../Components/OpinionPiece"
import EnyobeniInitiative from '../Components/EnyobeniInitiative'
import { useEventDetailsContext } from "../hooks/useEventDetailsContext"
import EventsCalendar from "../Components/Calendar"
import { Link } from 'react-router-dom'
import { useEffect } from "react"
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Home = () => {

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

    return(
        <>
        <Link to='/signup'></Link>
        <section className="hero-section">   
         <h1>Seven Women. One Vision. A Future South Africa Built On Peace.</h1>
        
        
        
        {/* this to open a section on the same page */}
        
        </section>
        
        <section className="initiative-section">
            <EnyobeniInitiative />
        </section>
        
        <section id="about" className="who-section">
        
        <BeliefCards />

        </section>


        {/* Events */}
          <section id="events" className="events-section">

        <div className="events-header">

            <h1>Upcoming Events</h1>

        </div>

        <div className="events-layout">

            {/* Calendar */}

            <div id="calendar" className="calendar">

                
                <EventsCalendar />
            </div>

            {/* Event Cards */}

        <div className="events-area">

        <div className="events-wrapper">

         <button
                 className="arrow-left"
                  onClick={scrollLeft}
                >
                 <FaChevronLeft />
          </button>

             <div
             ref={sliderRef}
            className="event-cards-container"
              >
            

                {eventdetails &&
                      eventdetails.map((eventdetail) => (

                           <EventCards
                         key={eventdetail._id}
                           eventdetail={eventdetail}
                    />

                   ))}

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

    {/* MEMBERS */}

    <section id="members" className="members-section">

        <h1>Meet The Seven Women</h1>

        {/* Member Cards */}
        <MemberCards />
    </section>

    {/* MISSION */}

    <section className="mission-section">

        <h1>Mission & Vision</h1>
        <VisionMission />
    </section>

    <section className="opinion-piece-section">
        <h1>Our Opinion Piece</h1>
        <OpinionPiece />
    </section>
        </>
    )
}

        
       /*<p>A collective of seven women committed to fostering peace, justice and unity
                 by transforming community challenges into opportunities for dialogue, healing and lasting change.</p>*/
export default Home